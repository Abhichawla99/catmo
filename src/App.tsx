import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { GamePage } from './pages/GamePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { MeetingBookedPage } from './pages/MeetingBookedPage';
// Agent Pages
import { AICustomerSupportAgentPage } from './pages/agents/AICustomerSupportAgentPage';
import { AISDRAgentPage } from './pages/agents/AISDRAgentPage';
import { AIResearchAgentPage } from './pages/agents/AIResearchAgentPage';
import { AIContentAgentPage } from './pages/agents/AIContentAgentPage';
import { AIOperationsAgentPage } from './pages/agents/AIOperationsAgentPage';
import { AIDataAgentPage } from './pages/agents/AIDataAgentPage';
// Automation Pages
import { LeadQualificationRoutingPage } from './pages/automations/LeadQualificationRoutingPage';
import { CRMEnrichmentEnginePage } from './pages/automations/CRMEnrichmentEnginePage';
import { InboxCRMIngestionPage } from './pages/automations/InboxCRMIngestionPage';
import { ClientOnboardingFlowPage } from './pages/automations/ClientOnboardingFlowPage';
import { AutomatedReportingSystemPage } from './pages/automations/AutomatedReportingSystemPage';
import { DocumentProcessingPipelinePage } from './pages/automations/DocumentProcessingPipelinePage';
import { DataSyncAutomationPage } from './pages/automations/DataSyncAutomationPage';
import { EmailMarketingAutomationPage } from './pages/automations/EmailMarketingAutomationPage';
import { SocialMediaAutomationPage } from './pages/automations/SocialMediaAutomationPage';
import { WorkflowAutomationPage } from './pages/automations/WorkflowAutomationPage';
// Integration Pages
import { AirtableIntegrationPage } from './pages/integrations/AirtableIntegrationPage';
import { AnthropicIntegrationPage } from './pages/integrations/AnthropicIntegrationPage';
import { AWSIntegrationPage } from './pages/integrations/AWSIntegrationPage';
import { GoogleCloudIntegrationPage } from './pages/integrations/GoogleCloudIntegrationPage';
import { HubSpotIntegrationPage } from './pages/integrations/HubSpotIntegrationPage';
import { MakeIntegrationPage } from './pages/integrations/MakeIntegrationPage';
import { MicrosoftAzureIntegrationPage } from './pages/integrations/MicrosoftAzureIntegrationPage';
import { N8nIntegrationPage } from './pages/integrations/N8nIntegrationPage';
import { NotionIntegrationPage } from './pages/integrations/NotionIntegrationPage';
import { OpenAIIntegrationPage } from './pages/integrations/OpenAIIntegrationPage';
import { SalesforceIntegrationPage } from './pages/integrations/SalesforceIntegrationPage';
import { SlackIntegrationPage } from './pages/integrations/SlackIntegrationPage';
import { StripeIntegrationPage } from './pages/integrations/StripeIntegrationPage';
import { ShopifyIntegrationPage } from './pages/integrations/ShopifyIntegrationPage';
import { ZapierIntegrationPage } from './pages/integrations/ZapierIntegrationPage';
// Use Case Pages
import { ComplianceAutomationPage } from './pages/use-cases/ComplianceAutomationPage';
import { ContentCreationAutomationPage } from './pages/use-cases/ContentCreationAutomationPage';
import { CustomerRetentionAutomationPage } from './pages/use-cases/CustomerRetentionAutomationPage';
import { CustomerServiceAutomationPage } from './pages/use-cases/CustomerServiceAutomationPage';
import { DataProcessingAutomationPage } from './pages/use-cases/DataProcessingAutomationPage';
import { FinanceAutomationPage } from './pages/use-cases/FinanceAutomationPage';
import { HRAutomationPage } from './pages/use-cases/HRAutomationPage';
import { InventoryManagementAutomationPage } from './pages/use-cases/InventoryManagementAutomationPage';
import { LeadGenerationAutomationPage } from './pages/use-cases/LeadGenerationAutomationPage';
import { MarketingAutomationPage } from './pages/use-cases/MarketingAutomationPage';
import { OperationsAutomationPage } from './pages/use-cases/OperationsAutomationPage';
import { SalesAutomationPage } from './pages/use-cases/SalesAutomationPage';
// Guide Pages
import { AIAutomationBestPracticesPage } from './pages/guides/AIAutomationBestPracticesPage';
import { CalculateROIAutomationPage } from './pages/guides/CalculateROIAutomationPage';
import { ChoosingRightAIAgentPage } from './pages/guides/ChoosingRightAIAgentPage';
import { CommonMistakesAIAutomationPage } from './pages/guides/CommonMistakesAIAutomationPage';
import { CostOptimizationGuidePage } from './pages/guides/CostOptimizationGuidePage';
import { GettingStartedAIAutomationPage } from './pages/guides/GettingStartedAIAutomationPage';
import { HowToImplementAIAutomationPage } from './pages/guides/HowToImplementAIAutomationPage';
import { ScalingAIAutomationPage } from './pages/guides/ScalingAIAutomationPage';
import { SecurityBestPracticesPage } from './pages/guides/SecurityBestPracticesPage';
// Comparison Pages
import { AIAgentsVsChatbotsPage } from './pages/comparisons/AIAgentsVsChatbotsPage';
import { AIAgentsVsTraditionalAutomationPage } from './pages/comparisons/AIAgentsVsTraditionalAutomationPage';
import { AIVsRPAPage } from './pages/comparisons/AIVsRPAPage';
import { CustomVsOffTheShelfPage } from './pages/comparisons/CustomVsOffTheShelfPage';
import { N8nVsMakePage } from './pages/comparisons/N8nVsMakePage';
import { N8nVsZapierPage } from './pages/comparisons/N8nVsZapierPage';
// Solution Pages
import { BusinessIntelligencePage } from './pages/solutions/BusinessIntelligencePage';
import { ContentIntelligencePage } from './pages/solutions/ContentIntelligencePage';
import { CustomerIntelligencePage } from './pages/solutions/CustomerIntelligencePage';
import { ProcessAutomationPage } from './pages/solutions/ProcessAutomationPage';
import { SalesIntelligencePage } from './pages/solutions/SalesIntelligencePage';
import { WorkflowAutomationPage as SolutionsWorkflowAutomationPage } from './pages/solutions/WorkflowAutomationPage';
// Industry Pages
import { AerospacePage } from './pages/industries/AerospacePage';
import { AgenciesPage } from './pages/industries/AgenciesPage';
import { AgriculturePage } from './pages/industries/AgriculturePage';
import { ConstructionPage } from './pages/industries/ConstructionPage';
import { ConsultingFirmsPage } from './pages/industries/ConsultingFirmsPage';
import { ECcommercePage } from './pages/industries/ECcommercePage';
import { EducationPage } from './pages/industries/EducationPage';
import { EnergyUtilitiesPage } from './pages/industries/EnergyUtilitiesPage';
import { FinancePage } from './pages/industries/FinancePage';
import { FoodBeveragePage } from './pages/industries/FoodBeveragePage';
import { GovernmentPage } from './pages/industries/GovernmentPage';
import { HealthcarePage } from './pages/industries/HealthcarePage';
import { HospitalityPage } from './pages/industries/HospitalityPage';
import { InsurancePage } from './pages/industries/InsurancePage';
import { LegalPage } from './pages/industries/LegalPage';
import { LogisticsPage } from './pages/industries/LogisticsPage';
import { ManufacturingPage } from './pages/industries/ManufacturingPage';
import { MediaEntertainmentPage } from './pages/industries/MediaEntertainmentPage';
import { NonProfitPage } from './pages/industries/NonProfitPage';
import { PharmaceuticalsPage } from './pages/industries/PharmaceuticalsPage';
import { ProfessionalServicesPage } from './pages/industries/ProfessionalServicesPage';
import { RealEstatePage } from './pages/industries/RealEstatePage';
import { RetailPage } from './pages/industries/RetailPage';
import { SaaSCompaniesPage } from './pages/industries/SaaSCompaniesPage';
import { TechnologyPage } from './pages/industries/TechnologyPage';
import { TelecommunicationsPage } from './pages/industries/TelecommunicationsPage';
import { TransportationPage } from './pages/industries/TransportationPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/meetingbooked" element={<MeetingBookedPage />} />
            {/* Agent Routes */}
            <Route path="/agents/ai-customer-support-agent" element={<AICustomerSupportAgentPage />} />
            <Route path="/agents/ai-sdr-agent" element={<AISDRAgentPage />} />
            <Route path="/agents/ai-research-agent" element={<AIResearchAgentPage />} />
            <Route path="/agents/ai-content-agent" element={<AIContentAgentPage />} />
            <Route path="/agents/ai-operations-agent" element={<AIOperationsAgentPage />} />
            <Route path="/agents/ai-data-agent" element={<AIDataAgentPage />} />
            {/* Automation Routes */}
            <Route path="/automations/lead-qualification-routing" element={<LeadQualificationRoutingPage />} />
            <Route path="/automations/crm-enrichment-engine" element={<CRMEnrichmentEnginePage />} />
            <Route path="/automations/inbox-crm-ingestion" element={<InboxCRMIngestionPage />} />
            <Route path="/automations/client-onboarding-flow" element={<ClientOnboardingFlowPage />} />
            <Route path="/automations/automated-reporting-system" element={<AutomatedReportingSystemPage />} />
            <Route path="/automations/document-processing-pipeline" element={<DocumentProcessingPipelinePage />} />
            <Route path="/automations/data-sync-automation" element={<DataSyncAutomationPage />} />
            <Route path="/automations/email-marketing-automation" element={<EmailMarketingAutomationPage />} />
            <Route path="/automations/social-media-automation" element={<SocialMediaAutomationPage />} />
            <Route path="/automations/workflow-automation" element={<WorkflowAutomationPage />} />
            {/* Integration Routes */}
            <Route path="/integrations/airtable" element={<AirtableIntegrationPage />} />
            <Route path="/integrations/anthropic" element={<AnthropicIntegrationPage />} />
            <Route path="/integrations/aws" element={<AWSIntegrationPage />} />
            <Route path="/integrations/google-cloud" element={<GoogleCloudIntegrationPage />} />
            <Route path="/integrations/hubspot" element={<HubSpotIntegrationPage />} />
            <Route path="/integrations/make" element={<MakeIntegrationPage />} />
            <Route path="/integrations/microsoft-azure" element={<MicrosoftAzureIntegrationPage />} />
            <Route path="/integrations/n8n" element={<N8nIntegrationPage />} />
            <Route path="/integrations/notion" element={<NotionIntegrationPage />} />
            <Route path="/integrations/openai" element={<OpenAIIntegrationPage />} />
            <Route path="/integrations/salesforce" element={<SalesforceIntegrationPage />} />
            <Route path="/integrations/slack" element={<SlackIntegrationPage />} />
            <Route path="/integrations/stripe" element={<StripeIntegrationPage />} />
            <Route path="/integrations/shopify" element={<ShopifyIntegrationPage />} />
            <Route path="/integrations/zapier" element={<ZapierIntegrationPage />} />
            {/* Use Case Routes */}
            <Route path="/use-cases/compliance-automation" element={<ComplianceAutomationPage />} />
            <Route path="/use-cases/content-creation-automation" element={<ContentCreationAutomationPage />} />
            <Route path="/use-cases/customer-retention-automation" element={<CustomerRetentionAutomationPage />} />
            <Route path="/use-cases/customer-service-automation" element={<CustomerServiceAutomationPage />} />
            <Route path="/use-cases/data-processing-automation" element={<DataProcessingAutomationPage />} />
            <Route path="/use-cases/finance-automation" element={<FinanceAutomationPage />} />
            <Route path="/use-cases/hr-automation" element={<HRAutomationPage />} />
            <Route path="/use-cases/inventory-management-automation" element={<InventoryManagementAutomationPage />} />
            <Route path="/use-cases/lead-generation-automation" element={<LeadGenerationAutomationPage />} />
            <Route path="/use-cases/marketing-automation" element={<MarketingAutomationPage />} />
            <Route path="/use-cases/operations-automation" element={<OperationsAutomationPage />} />
            <Route path="/use-cases/sales-automation" element={<SalesAutomationPage />} />
            {/* Guide Routes */}
            <Route path="/guides/ai-automation-best-practices" element={<AIAutomationBestPracticesPage />} />
            <Route path="/guides/calculate-roi-automation" element={<CalculateROIAutomationPage />} />
            <Route path="/guides/choosing-right-ai-agent" element={<ChoosingRightAIAgentPage />} />
            <Route path="/guides/common-mistakes-ai-automation" element={<CommonMistakesAIAutomationPage />} />
            <Route path="/guides/cost-optimization" element={<CostOptimizationGuidePage />} />
            <Route path="/guides/getting-started-ai-automation" element={<GettingStartedAIAutomationPage />} />
            <Route path="/guides/how-to-implement-ai-automation" element={<HowToImplementAIAutomationPage />} />
            <Route path="/guides/scaling-ai-automation" element={<ScalingAIAutomationPage />} />
            <Route path="/guides/security-best-practices" element={<SecurityBestPracticesPage />} />
            {/* Comparison Routes */}
            <Route path="/comparisons/ai-agents-vs-chatbots" element={<AIAgentsVsChatbotsPage />} />
            <Route path="/comparisons/ai-agents-vs-traditional-automation" element={<AIAgentsVsTraditionalAutomationPage />} />
            <Route path="/comparisons/ai-vs-rpa" element={<AIVsRPAPage />} />
            <Route path="/comparisons/custom-vs-off-the-shelf" element={<CustomVsOffTheShelfPage />} />
            <Route path="/comparisons/n8n-vs-make" element={<N8nVsMakePage />} />
            <Route path="/comparisons/n8n-vs-zapier" element={<N8nVsZapierPage />} />
            {/* Solution Routes */}
            <Route path="/solutions/business-intelligence" element={<BusinessIntelligencePage />} />
            <Route path="/solutions/content-intelligence" element={<ContentIntelligencePage />} />
            <Route path="/solutions/customer-intelligence" element={<CustomerIntelligencePage />} />
            <Route path="/solutions/process-automation" element={<ProcessAutomationPage />} />
            <Route path="/solutions/sales-intelligence" element={<SalesIntelligencePage />} />
            <Route path="/solutions/workflow-automation" element={<SolutionsWorkflowAutomationPage />} />
            {/* Industry Routes */}
            <Route path="/industries/aerospace" element={<AerospacePage />} />
            <Route path="/industries/agencies" element={<AgenciesPage />} />
            <Route path="/industries/agriculture" element={<AgriculturePage />} />
            <Route path="/industries/construction" element={<ConstructionPage />} />
            <Route path="/industries/consulting-firms" element={<ConsultingFirmsPage />} />
            <Route path="/industries/ecommerce" element={<ECcommercePage />} />
            <Route path="/industries/education" element={<EducationPage />} />
            <Route path="/industries/energy-utilities" element={<EnergyUtilitiesPage />} />
            <Route path="/industries/finance" element={<FinancePage />} />
            <Route path="/industries/food-beverage" element={<FoodBeveragePage />} />
            <Route path="/industries/government" element={<GovernmentPage />} />
            <Route path="/industries/healthcare" element={<HealthcarePage />} />
            <Route path="/industries/hospitality" element={<HospitalityPage />} />
            <Route path="/industries/insurance" element={<InsurancePage />} />
            <Route path="/industries/legal" element={<LegalPage />} />
            <Route path="/industries/logistics" element={<LogisticsPage />} />
            <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
            <Route path="/industries/media-entertainment" element={<MediaEntertainmentPage />} />
            <Route path="/industries/non-profit" element={<NonProfitPage />} />
            <Route path="/industries/pharmaceuticals" element={<PharmaceuticalsPage />} />
            <Route path="/industries/professional-services" element={<ProfessionalServicesPage />} />
            <Route path="/industries/real-estate" element={<RealEstatePage />} />
            <Route path="/industries/retail" element={<RetailPage />} />
            <Route path="/industries/saas-companies" element={<SaaSCompaniesPage />} />
            <Route path="/industries/technology" element={<TechnologyPage />} />
            <Route path="/industries/telecommunications" element={<TelecommunicationsPage />} />
            <Route path="/industries/transportation" element={<TransportationPage />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  )
}

export default App
