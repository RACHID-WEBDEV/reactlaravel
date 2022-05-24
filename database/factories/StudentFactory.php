<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $gender = $this->faker->randomElement($array = array('male','female'));
       return [
            'fullname' => $this->faker->name($gender),
            'class' => $this->faker->numberBetween(1,6),
            'gender' => $gender,
            'phone' => $this->faker->numberBetween(8113344,8999999999),
        ];
    }
}
