<?

/**
    Конфигурация nami.
    Записывается сюда стартовым скриптом, используется отсюда всеми частями системы.
*/

class NamiConfig
{
    static public $db_backend;
    static public $db_mapper;
    static public $db_host;
    static public $db_port;
    static public $db_name;
    static public $db_user;
    static public $db_password;
    static public $db_charset;
    static public $db_prefix;
    static public $db_debug;

    static public $models;
    
	static public $locales;
	
	static public $queryset_get_cache_size = 50;  // Хранить не более 50 закешированных моделей для запросов QuerySet()->get()
}

