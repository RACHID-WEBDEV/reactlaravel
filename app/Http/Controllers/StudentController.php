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
            return response()->json($employees);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    /**
     * Get individual employee details.
     */
    public function getEmployeeDetails(Request $request)
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
           $studentFullName   = $request->get('studentFullName');
           $studentClass   = $request->get('studentClass');
           $studentGender = $request->get('studentGender');
           $studentPhone = $request->get('studentPhone');

            Student::where('id',$studentId)->update([
                'fullname'   => $studentFullName,
                'class' => $studentClass,
                'gender' =>  $studentGender,
                'phone' =>  $studentPhone
            ]);

            return response()->json([
                'fullname'   => $studentName,
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


    // Deleting Employee.

    public function destroy(Employee$student)
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


    // Storing new employee.

    public function store(Request $request)
    {
        try
        {
          $studentFullName   = $request->get('studentFullName');
           $studentClass   = $request->get('studentClass');
           $studentGender = $request->get('studentGender');
           $studentPhone = $request->get('studentPhone');

            Student::create([
                'fullname'   =>  $studentFullName,
                'class' => $studentClass,
                'gender' =>  $studentGender,
                'phone' =>  $studentPhone
            ]);

            return response()->json([
                'fullname'   =>  $studentFullName,
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
