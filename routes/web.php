
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;




Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/student/list', 
        [StudentController::class, 'getstudentList'])->name('student.list');

Route::post('/get/individual/student/details',
        [StudentController::class, 'getstudentDetails'])->name('student.details');

Route::post('/update/student/data',        
    [StudentController::class, 'updatestudentData']);


Route::delete('/delete/student/data/{student}',
    [StudentController::class, 'destroy']);

Route::post('/store/student/data',
    [StudentController::class, 'store']);