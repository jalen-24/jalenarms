import csharpLogo from "../assets/csharp-logo.png"
import dotnetLogo from "../assets/dotnet-logo.svg"
import sqlLogo from "../assets/sql1.png"
import { SiGraphql, SiElasticsearch } from "react-icons/si"
import { VscAzureDevops } from "react-icons/vsc"

const Carvana = () => {
  return (
    <div className="md:grid md:grid-cols-12 flex flex-col items-start md:gap-10 gap-2 ">
        <div className="flex flex-col col-span-2">
          <p className='text-zinc-400 text-sm'>2025 - Current</p>
        </div>
        <div className="flex flex-col col-span-10">
          <div className="flex md:flex-row flex-col md:items-center md:gap-2">
            <p className='font-semibold text-white text-xl'>Carvana</p>
            <div className="flex items-center gap-2">
              <img src={csharpLogo} alt='' className='w-7 h-7 rounded-sm' />
              <img src={dotnetLogo} alt='' className='w-6 h-6 rounded-sm' />
              <SiGraphql className='w-5 h-5 text-pink-500' />
              <SiElasticsearch className='w-5 h-5 text-cyan-400' />
              <VscAzureDevops className='w-5 h-5 text-blue-400' />
            </div>
          </div>
          <p className='text-sm text-cyan-400'>Software Engineer</p>
          <p className='text-sm text-zinc-400 mt-2 max-w-2xl'>
            ADESA Clear, Carvana's digital wholesale auction — serving both first-party Carvana wholesale
            inventory and third-party sellers including <span className="text-zinc-200">BMW</span>,{" "}
            <span className="text-zinc-200">Tesla</span>, <span className="text-zinc-200">Chase</span>, and{" "}
            <span className="text-zinc-200">Credit Union Leasing of America</span>.
          </p>
          <div className="flex flex-col mt-8 gap-5">
            <div className="flex items-start gap-4">
              <img src={dotnetLogo} alt='' className='w-5 h-5 rounded-sm' />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'><span className="text-white font-medium">Listing automation</span> — develop and maintain the .NET microservices that automate daily listing creation for auction inventory</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'><span className="text-white font-medium">Async data flow</span> — work across distributed services that communicate over a service bus, decoupled and independently deployable</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'><span className="text-white font-medium">Event-driven workflows</span> — develop state machine workflows that orchestrate inventory lifecycle transitions and listing creation across those services</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'><span className="text-white font-medium">Production support</span> — diagnose and resolve customer-impacting incidents across distributed services, feeding fixes back to reduce repeat failures</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <SiElasticsearch className='w-5 h-5 text-cyan-400 shrink-0' />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'><span className="text-white font-medium">Search API</span> — own the Elasticsearch ingestion pipelines behind vehicle discovery, keeping listings searchable for web and mobile clients as inventory turns over</p>
                </div>
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'><span className="text-white font-medium">Index tuning</span> — tune index mappings and query construction so search stays fast and relevant as inventory changes</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <SiGraphql className='w-5 h-5 text-pink-500 shrink-0' />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'><span className="text-white font-medium">GraphQL subgraphs</span> — build subgraphs with Hot Chocolate composed through a Fusion gateway, giving client teams one typed endpoint instead of calls to each backing service</p>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <VscAzureDevops className='w-5 h-5 text-blue-400 shrink-0' />
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <p>-</p>
                  <p className='text-sm text-zinc-300'><span className="text-white font-medium">Azure DevOps CI/CD</span> — automate builds, deployments, and releases across multiple production services, shortening the path from merge to production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Carvana
