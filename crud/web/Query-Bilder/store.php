<?php

require_once __DIR__.'/config.php';

//This is Query Connection File
class Query extends DB{
	
	public $sql;
	
	public function insert($tablename,$formdata=[]){
		
	$columns = implode(",",array_keys($formdata));
	$values = implode("','",array_values($formdata));
	
	$SQL = "INSERT INTO {$tablename}($columns) values('$values');";
	$this->sql = $SQL;
	return $this;
	}
	public function getQuery(){
		return $this->sql;
	}	
	
	
public function select($columns='*'){
	$sql = "SELECT $columns FROM ";
	$this->sql = $sql;
	return $this;
}

public function table($tablename){

$this->sql = $this->sql."$tablename";
return $this;

}

public function where($column='',$operator='=',$value=''){
	
	$count = func_num_args();
	if($count == 2){
		$value = $operator;
		$column = $column;
		$this->sql = $this->sql. " WHERE $column = '$value'";
	}
	
	if($count == 3){
		
		$operator = $operator;
		$value = $value;
		$column = $column;
		
		$this->sql = $this->sql. " WHERE $column $operator '$value'";
	}
	if($count==1 and is_array($column)){
		$condition_arr = $column;
		
		$str = '';
		foreach($condition_arr as $key => $value){
			$str = $str . " {$key} = '{$value}' AND"; 
		}
		$str = substr($str,0,-4);
		$this->sql = $this->sql. " WHERE ".$str ;
	}
	##########this query for the or gate########
	// if($count==1 and is_array($column)){
	// 	$condition_arr1=$column;
	// 	$str1='';
	// 	foreach($condition_arr1 as $key1=>$value1){
	// 		$str1=$str1." {$key1} = '{$value1}' OR ";
	// 	}
	// 	$str1=substr($str1,0,-3);
	// 	$this->sql=$this->sql." WHERE".$str1;
	// }
	
	return $this;
	
}

public function update($tablename,$formdata){
	
	$sql = "UPDATE {$tablename} SET";
	$str = '';
	foreach($formdata as $column => $value){
		$str = $str." $column = '$value',";
	}
	$str = substr($str,0,-1);
	$this->sql = "".$sql." ".$str;
	return $this;
}



public function delete($tablename){
	
	$this->sql = "DELETE FROM {$tablename} ";
	return $this;
}

public function TRUNCATE($tablename){
	
	$this->sql = "TRUNCATE TABLE {$tablename} ";
	return $this;
}


}

$query = new Query();

echo $query->insert('javahindi',[

	'name'=>'ashwani',
	'email'=>'ashwaniverma949@gmail.com',
	'password'=>1234,
	'mobile'=>'9521410162',
	'dob'=>'01-feb-1999'
	
])->getQuery();

echo PHP_EOL;
echo $query->select('name,class,email')->table('emp')->getQuery();
echo PHP_EOL;
echo $query->select()->table('emp')->getQuery();
echo PHP_EOL;
echo $query->select('name as n,class as c,email as e,count(*) as cnt,distinct')->table('emp')->getQuery();
echo PHP_EOL;
echo $query->select('id,name,email')->table('emp')->where('email','awi@gmail.com')->getQuery();
echo PHP_EOL;
echo $query->select('id,name,email')->table('emp')->where('email','!=','awi@gmail.com')->getQuery();
echo PHP_EOL;
echo $query->select('id,name,email')->table('emp')->where('salary','>','10000')->getQuery();
echo PHP_EOL;
echo $query->select('email,password')
	->table('emp')
	->where(['email'=>'awnish@gmail.com','password'=>'1234','status'=>'active'])->getQuery();

echo PHP_EOL;
echo PHP_EOL;
echo $query->update('emp',[
	'id'=>'1002',
	'name'=>'ravi',
	'marks'=>'100'
])->where('id',1001)->getQuery();

echo PHP_EOL;
echo $query->delete('emp')->where('id',1002)->getQuery();
echo PHP_EOL;
echo $query->delete('emp')->getQuery();
echo PHP_EOL;
echo $query->truncate('emp')->getQuery();