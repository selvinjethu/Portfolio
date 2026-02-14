const input = document.getElementById("command");
const output = document.getElementById("output");

function print(text="") {
  const div = document.createElement("div");
  div.textContent = text;
  output.appendChild(div);
  window.scrollTo(0, document.body.scrollHeight);
}

print("Architect DevOps Terminal");
print("Type 'help' to start.");
print("");

const commands = {
  help: `Available commands:
whoami
summary
skills
experience
projects
contact
clear`,
  whoami: "Selvin Raj P | Senior DevOps Engineer | Platform Engineering",
  summary: "8+ years in AWS, Kubernetes, OpenShift, CI/CD, Terraform, Platform Engineering",
  skills: "AWS | EKS | OpenShift | Terraform | Helm | Jenkins | GitHub Actions | ArgoCD | Python",
  experience: "Wipro | Cotiviti | Capgemini | Aggregate Intelligence | TNCA",
  projects: "- Kubernetes Platform Modernization\n- Enterprise CI/CD Framework\n- OpenShift Platform Engineering",
  contact: "Email: selvinjethu@gmail.com | Tamil Nadu, India"
};

input.addEventListener("keydown", function(e){
  if (e.key !== "Enter") return;
  const cmd = input.value.trim();
  print("selvin@architect:/home/devops$ " + cmd);

  if (cmd === "clear") {
    output.innerHTML = "";
    input.value = "";
    return;
  }

  print(commands[cmd] || "command not found");
  input.value = "";
});

window.addEventListener("click", () => input.focus());
