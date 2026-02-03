import { validateEnv } from "@/lib/env/validateEnv";

export default function HealthPage(){
  const result = validateEnv();

  return(
    <main>
      <h1>Health Check</h1>
      <section>
        <h2>Enviroment Variables</h2>

        {result.ok ? (
          <p>ok</p> 
        ) : (
          <>
            <p>Missing env:</p>
            <ul>
              {result.missing.map((key) =>(
                <li key={key}>{key}</li>
              ))}
            </ul>
          </>
        )}
      </section>
    </main>
  )
}