<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Student;

class StudentController extends Controller
{
    // Get Student List from database.

    public function getStudentList()    
    {
        try
        {
           $students = Student::orderBy('id', 'DESC')->get();
            return response()->json($students);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    /**
     * Get individual student details.
     */
    public function getStudentDetails(Request $request)
    {
        try
        {
           $studentData = Student::findOrFail($request->get('studentId'));
            return response()->json($studentData);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


    /**
     * Updating student data.
     */
    public function updateStudentData(Request $request)
    {
        try
        {
           $studentId     = $request->get('studentId');
           $studentFullname   = $request->get('studentFullname');
           $studentClass   = $request->get('studentClass');
           $studentGender = $request->get('studentGender');
           $studentPhone = $request->get('studentPhone');

            Student::where('id',$studentId)->update([
                'fullname'   => $studentFullname,
                'class' => $studentClass,
                'gender' =>  $studentGender,
                'phone' =>  $studentPhone
            ]);

            return response()->json([
                'fullname'   => $studentFullname,
                'class' => $studentClass,
                'gender' =>  $studentGender,
                'phone' =>  $studentPhone
            ]);
        
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


    // Deleting Student.

    public function destroy(Student$student)
    {
        try
        {
           $student->delete(); 
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }


    // Storing new Student.

    public function store(Request $request)
    {
        try
        {
          $studentFullname   = $request->get('studentFullname');
           $studentClass   = $request->get('studentClass');
           $studentGender = $request->get('studentGender');
           $studentPhone = $request->get('studentPhone');

            Student::create([
                'fullname'   =>  $studentFullname,
                'class' => $studentClass,
                'gender' =>  $studentGender,
                'phone' =>  $studentPhone
            ]);

            return response()->json([
                'fullname'   =>  $studentFullname,
                'class' => $studentClass,
                'gender' =>  $studentGender,
                'phone' =>  $studentPhone
            ]);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }
}
