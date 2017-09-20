<?php
/**
Инкрементальное логирование используемой памяти.
Использование:
    1. require_once('debug.php');
    2. В любом месте исходного кода вставить вызов mu();
На стандартный вывод будет выдана строка состояния памяти:

MU  +128   4173 K  line 130  /home/the_site/index.php db_job()
      |      |           |           |                   |
      |      |           |           |                   +- имя функции, откуда вызвана mu()
      |      |           |           +--------------------- полный путь к исходному файлу, откуда вызвана mu()
      |      |           +--------------------------------- номер строки, на которой вызвана mu()
      |      +--------------------------------------------- используемая память в килобайтах на момент вызова mu()
      +---------------------------------------------------- изменение используемой памяти в байтах с момента предыдущего вызова mu()
*/
function mu() {
    static $previous = 0;

    $current = memory_get_usage();
    $delta = $current - $previous;
    
    $trace = debug_backtrace();
    
    printf('<pre>MU ' . ($delta ? '%1$+10d' : str_repeat(' ', 10)) . ' %2$6d K  line %3$-4d %4$s %5$s</pre>',
        $delta, round($current / 1024), $trace[0]['line'], $trace[0]['file'], array_key_exists(1, $trace) ? $trace[1]['function'].'()' : '');

    flush();
    
    $previous = $current;
}