// Workout details data
const workoutDetails = [
  {
    title: "Day 1: Lower Body",
    description: `
      <strong>Warm-Up Routine:</strong>
      <ul>
        <li>Hip Bridges: 2 sets x 12 reps</li>
        <li>Bodyweight Lunges: 2 sets x 10 reps per leg</li>
        <li>Standing Leg Swings: 10 reps per leg</li>
      </ul>
      <strong>Workout:</strong>
      <ul>
        <li>Leg Press: 3 sets x 12-15 reps</li>
        <li>Hip Thrusts: 4 sets x 12-15 reps</li>
        <li>Romanian Deadlifts: 3 sets x 10-12 reps</li>
        <li>Step-Ups: 3 sets x 12 reps per leg</li>
      </ul>
      <strong>Cool Down</strong>
      <ul>
        <li>Incline Walk: 10 minutes</li>
      </ul>    `,
  },
  {
    title: "Day 2: Upper Body & Core",
    description: `
      <strong>Warm-Up Routine:</strong>
      <ul>
        <li>Wall Slides: 2 sets x 12 reps</li>
        <li>Arm Circles: 2 sets x 10 reps</li>
        <li>Resistance Band Pull-Aparts: 2 sets x 12 reps</li>
      </ul>
      <strong>Workout:</strong>
      <ul>
        <li>Chest Press (Machine): 3 sets x 10-12 reps</li>
        <li>Machine Row: 3 sets x 12-15 reps</li>
        <li>Push-Ups: 3 sets x 15-20 reps</li>
        <li>Plank Hold: 3 sets x 30-60 seconds</li>
      </ul>
       <strong>Cool Down</strong>
      <ul>
        <li>Stairs(Machine): 10 minutes</li>
      </ul>
    `,
  },
  {
    title: "Day 3: Full Body",
    description: `
      <strong>Warm-Up Routine:</strong>
      <ul>
        <li>Cat-Cow Stretches: 2 sets of 8 cycles</li>
        <li>Bodyweight Squats (Slow): 2 sets x 10 reps</li>
        <li>Torso Twists: 2 sets x 12 reps per side</li>
      </ul>
      <strong>Workout:</strong>
      <ul>
        <li>Hip Thrusts: 4 sets x 12-15 reps</li>
        <li>Leg Press: 3 sets x 10-12 reps</li>
        <li>Machine Shoulder Press: 3 sets x 10-12 reps</li>
        <li>Mountain Climbers: 3 sets x 30 seconds</li>
        <li>Russian Twists: 3 sets x 20 twists (10 per side)</li>
      </ul>
      <strong>Cool Down</strong>
      <ul>
        <li>Cycling: 10 minutes</li>
      </ul>
    `,
  },
];

// Function to display workout details
function showDetails(dayIndex) {
  const detailsContainer = document.getElementById("details");
  const { title, description } = workoutDetails[dayIndex - 1];
  detailsContainer.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
  `;
  detailsContainer.style.display = "block";
}
