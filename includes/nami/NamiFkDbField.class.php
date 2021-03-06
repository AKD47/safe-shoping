<?
/**
    Поле - внешний ключ. Используется для организации связей 1-ко-многим
*/
class NamiFkDbField extends NamiDbField
{
	protected $index = true;	// Внешний ключ имеет индекс по умолчанию
	protected $model;			// Имя класса модели, на которую ссылается поле
    protected $related;         // Имя поля с массивом объектов на другой стороне связи. По умолчанию равно {$model}_set
	protected $valueClassname = 'NamiFkDbFieldValue'; // Имя класса значений

    /**
        Конструктор
        Выполняет проверки параметров создания поля
    */
    function __construct( array $params = array() )
    {
        // Проверим имя внешней модели
        if( array_key_exists( 'model', $params ) )
        {
            if( ! ( class_exists( $params['model'] ) && is_subclass_of( $params['model'], 'NamiModel' ) ) )
            {
                throw new NamiException( "'{$params[model]}' is not a Nami model class name" );
            }
        }
        else
        {
            throw new NamiException( "Must specify a 'model' parameter to bind foreign key to" );
        }

        parent::__construct( $params );

		// если related не был установлен — установим его на основе имени модели
        if( ! $this->related )
        {
            $this->related = strtolower( $params['model'] ).'_set';
        }
    }
    
    function & getValue( $language = null )
    {
        if( $this->value->isNull( $language ) ) {
			$this->value->set( new $this->valueClassname( $this->valueOptions ), $language );
        }
    	$value = $this->value->get( $language );
		$value = &$value->get();
        return $value;
    }
}

