import sqlLogo from "../assets/sql1.png"
import reactLogo from "../assets/react.svg"
import csharpLogo from "../assets/csharp-logo.png"
import pythonLogo from "../assets/python.webp"
import dotnetLogo from "../assets/dotnet-logo.svg"
import blazorLogo from "../assets/blazorLogo.png"

const CommunityBridges = () => {
  return (
    <div className="md:grid md:grid-cols-12 flex flex-col items-start md:gap-10 gap-2 ">
        <div className="flex flex-col col-span-2">
          <p className='text-zinc-400 text-sm'>2023 - Current</p>
          <p className='text-zinc-500 text-xs'>Part-time since 2025</p>
        </div>
        <div className="flex flex-col col-span-10">
          <div className="flex md:flex-row flex-col md:items-center md:gap-2">
            <p className='font-semibold text-white text-xl'>Community Bridges Inc.</p>
            <div className="flex items-center gap-2">
              <img src={csharpLogo} alt='' className='w-7 h-7 rounded-sm' />
              <img src={dotnetLogo} alt='' className='w-6 h-6 rounded-sm' />
              <img src={blazorLogo} alt='' className='w-5 h-5 rounded-sm' />
              <img src={reactLogo} alt='' className='w-5 h-5 rounded-sm' />
              <img src={sqlLogo} alt='' className='w-6 h-6 rounded-sm' />
              <img src={pythonLogo} alt='' className='w-5 h-5 rounded-sm' />
            </div>
          </div>
          <p className='text-sm text-cyan-400'>Software Engineer / Data Engineer</p>
          <p className='text-sm text-zinc-400 mt-2 max-w-2xl'>
            Built a shelter management platform from the ground up — a .NET Web API with a Blazor WASM
            client — that replaced the Excel workbooks shelters used to manage clientele, and became their
            system of record for HUD-mandated HMIS documentation.
          </p>
          <div className="flex flex-col mt-8 gap-5">
            <div className="flex items-start gap-4">
              <img src={dotnetLogo} alt='' className='w-5 h-5 rounded-sm shrink-0' />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>
                    <span className="text-white font-medium">Bedboard</span> — built a bird's-eye view of the
                    shelter's full client inventory, with drill-in to any client's active bedstay or profile,
                    replacing manual spreadsheet roster reconciliation with a live view staff act on directly
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>
                    <span className="text-white font-medium">Low-code template engine</span> — built a
                    configurable templating system that persists entirely new data models from configuration
                    alone, so staff capture new HMIS data points without a code change or redeploy
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>
                    <span className="text-white font-medium">E-signature capture</span> — integrated an ePad ink
                    signature pad with a reusable PDF generator that stamps client signatures and initials onto
                    generated documents, giving shelters downloadable, audit-ready signed records
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>
                    <span className="text-white font-medium">HIPAA compliance</span> — implemented role-based
                    access control and field-level audit history so protected client data stays access-scoped
                    and every change is attributable
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>
                    <span className="text-white font-medium">Clean Architecture</span> — structured the solution
                    to keep it testable and maintainable as shelter requirements changed
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>
                    <span className="text-white font-medium">Blue-green deployment</span> — built CI/CD
                    pipelines that run automated tests, deploy to a staging IIS site, then slot-swap between two
                    IIS sites running in tandem, so releases land on the remote server without downtime and roll
                    back with a swap
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={sqlLogo} alt='' className='w-5 h-5 rounded-sm shrink-0' />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>
                    <span className="text-white font-medium">Stored procedures &amp; views</span> — write and
                    maintain business logic on a remote SQL Server instance serving both the application and
                    staff reporting needs
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>
                    <span className="text-white font-medium">Schema design</span> — model client, bedstay, and
                    documentation data so the flexible template system can persist new record types without
                    schema migrations
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <img src={pythonLogo} alt='' className='w-5 h-5 rounded-sm shrink-0' />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>
                    <span className="text-white font-medium">Automated ETL</span> — built pipelines scheduled
                    through Windows Task Scheduler that process batches of billing claims, removing a recurring
                    manual step from the billing cycle
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'>
                    <span className="text-white font-medium">Data ingestion</span> — normalize and import large
                    Excel and CSV datasets into SQL Server, generalizing the data as needed so downstream
                    reporting stays consistent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CommunityBridges
