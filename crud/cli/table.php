<?php
require __DIR__.'/vendor/autoload.php';

$table = new LucidFrame\Console\ConsoleTable();
$table
    ->addHeader('Id')
    ->addHeader('Name')
    ->addHeader('Email')
    ->addRow()
        ->addColumn('1001')
        ->addColumn('Brijesh')
        ->addColumn('Brijesh@gmail.com')
    ->addRow()
        ->addColumn('1002')
        ->addColumn('Viaks')
        ->addColumn('vikas@gmail.com')
    ->addRow()
        ->addColumn('1003')
        ->addColumn('Shani')
        ->addColumn('shani@gmail.com')
    ->display()
;



?>