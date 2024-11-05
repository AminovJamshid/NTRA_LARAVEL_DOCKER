<?php

namespace Database\Factories;

use App\Models\Branch;
use App\Models\Status;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ad>
 */
class AdFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'       => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'price'       => $this->faker->numberBetween(5000, 100000),
            'address'     => $this->faker->address(),
            'gender'      => $this->faker->randomElement(['male', 'female']),
            'rooms'       => $this->faker->randomDigit(),
            'user_id'     => User::factory(),
            'branch_id'   => Branch::factory(),
            'status_id'   => Status::factory(),
        ];
    }
}
