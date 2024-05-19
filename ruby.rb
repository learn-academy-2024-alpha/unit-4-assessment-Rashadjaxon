# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
  # Define attributes and make wheels writable and model and current_speed readable
  attr_accessor :wheels
  attr_reader :model, :current_speed

  # Initialize the Bike with a model name, default wheels to 2, and speed to 0
  def initialize(model)
    @model = model
    @wheels = 2
    @current_speed = 0
  end

  # Increase current speed by the given amount
  def pedal_faster(speed_increase)
    @current_speed += speed_increase
  end

  # Decrease current speed by the given amount and ensure it doesn't go below 0
  def brake(speed_decrease)
    @current_speed -= speed_decrease
    # If the speed is less than 0, reset it to 0
    @current_speed = 0 if @current_speed < 0
    @current_speed
  end

  # Return a string with the bike's model, number of wheels, and current speed
  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end
end