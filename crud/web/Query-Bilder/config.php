<?php 
// mysqli Object Oriented Approch
//config.php that means db.php is that

require_once __DIR__.'/dbconnect.php';

class DB{
	protected $DB;

	public function __construct(){
		global $conn;
		$this->DB = $conn;
	}
	public function getConnection(){
		return $this->DB;
	}
}
$db = new DB();
// print_r($db->getConnection());


 ?>