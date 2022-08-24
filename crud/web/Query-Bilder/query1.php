<?php 
//This is Query Connection File
require_once __DIR__.'/config.php';
class Query extends DB{

	public $sql;

	public function insert($tablename,$formdata=[])
	{
		$columns = implode("," ,array_keys($formdata));
		$values = implode("','",array_values($formdata));

		$SQL = "INSERT INTO {$tablename}($columns) values('$values');";
		$this->sql = $SQL;	
		return $this;
	}
	public function getQuery()
	{
		return $this->sql;
	}
}
$query = new Query();
echo $query->insert('emp',[
'name'=>'ashwani verma',
'email'=>'ashwaniverma949@gmail.com'
])->getQuery();


 ?>