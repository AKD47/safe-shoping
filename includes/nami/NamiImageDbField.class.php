<?
/**
 * Поле типа image
 * В качестве значения может принимать следующие штуки:
 *	1.	Внутренний формат, хранящийся в БД в виде json (смотри инициализацию в тексте или пример в базе).
 *		Это единственный формат инициализации, который не запускает загрузку и преобразование изображений.
 *	2.	Массив с полями tmp_name и name, причем tmp_name должен быть is_uploaded_file.
 *		Такой режим позволяет сохранять изображения напрямую из input type=file.
 *	3.	URI вида http://.+ Система попытается запросить изображение по указанному адресу.
 *	4.	Путь в файловой системе относительно DOCUMENT_ROOT вида /uploaded/images/05.jpg.
 *		Система попробует скопировать этот файл себе, исходный оставив в неприкосновенности.
 *		Воизбежание дыр, имя файла должно оканчиваться на допустимое расширение jpe?g|png|gif,
 *		а в имени файла не должно встречаться последовательности /../
 *	
 *	В value поля хранится массив вариантов изображения, который используется для сохранения в БД и прочего.
 */
class NamiImageDbField extends NamiFileDbField {
	protected $valueClassname = 'NamiImageDbFieldValue'; // Имя класса значений
}
