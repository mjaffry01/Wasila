const { execSync } = require("child_process");

function run(command) {
  console.log(`\n> ${command}`);
  execSync(command, { stdio: "inherit", shell: true });
}

try {
  process.chdir("C:\\Users\\Aasiya\\OneDrive\\Documents\\GitHub\\Wasila");

  run("git status");
  run("git add .");
  run('git commit -m "Updated Wasila website"');
  run("git push origin main");

  console.log("\nDone. Changes pushed to GitHub.");
} catch (error) {
  console.error("\nFailed:", error.message);
}