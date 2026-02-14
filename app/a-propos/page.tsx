export default function AProposPage() {
  return (
    <>
      <h1 className="page-title">À propos</h1>

      <div className="about-content">
        <p>
          Je m'appelle <strong>Elia</strong>. Ce site est un espace où je partage mes{" "}
          <em>hidoushim</em> — des réflexions personnelles sur les Parachiot de la Torah.
        </p>

        <p>
          Un <em>hidoush</em> (חידוש), c'est une idée nouvelle, un éclairage, une lecture que l'on
          propose sur un texte de la Torah. Ce n'est pas une pssak halakha, ni un cours magistral.
          C'est le fruit d'une étude personnelle, que je souhaite partager pour inspirer d'autres
          à réfléchir, approfondir et s'émerveiller devant la profondeur infinie de la Torah.
        </p>

        <p>
          Les hidoushim sont classés par <strong>Parasha</strong> et consultables par titre. J'en
          ajoute régulièrement, au fil de mon étude.
        </p>

        <p>
          Que ces quelques mots puissent contribuer, modestement, à l'élévation de la Torah dans
          le monde.
        </p>

        <div className="about-disclaimer">
          <strong>Note importante :</strong> Les idées publiées ici sont des hidoushim personnels,
          destinés à l'étude et à la réflexion. Pour toute question pratique de halakha, il est
          indispensable de consulter un Rav compétent.
        </div>
      </div>
    </>
  );
}
