import btrLogo from "../assets/images/btrlogo.png";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="exp-header-container">
        <h2 className="exp-main-heading">Experience</h2>
      </div>

      <div className="expbox">
        <div className="exp-text-side">
          <h3 className="exp-comp">Bureau of the Treasury Philippines</h3>
          <p className="exp-role">System Administration Intern</p>
          <br></br>
          <p className="expinfo">
            During my time at T.I.P. I interned at Bureau of the Treasury
            Philippines as a System Administration intern for 3 months where I
            learned to cooperate/communicate with other professionals, handle
            tickets, and troubleshoot computers regarding network problem such
            as wrong IP address and Printer Connection Issues.
          </p>
        </div>

        <img
          src={btrLogo}
          className="expimg"
          alt="Bureau of the Treasury Philippines"
        />
      </div>
    </section>
  );
}

export default Experience;