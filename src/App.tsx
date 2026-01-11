import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { useWebView } from './hooks/use-webview';
import { ChatInterface } from './components/ui/chat-interface';
import { FloatingChatBar } from './components/ui/floating-chat-bar';
import { ChatProvider, useChat } from './contexts/ChatContext';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { GamePage } from './pages/GamePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { MeetingBookedPage } from './pages/MeetingBookedPage';
import { AssessmentPage } from './pages/AssessmentPage';
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
// FAQ Pages
import { WhatIsAIAutomationPage } from './pages/faq/WhatIsAIAutomationPage';
import { HowDoesAIAutomationWorkPage } from './pages/faq/HowDoesAIAutomationWorkPage';
import { WhatAreAIAgentsPage } from './pages/faq/WhatAreAIAgentsPage';
import { HowMuchDoesAIAutomationCostPage } from './pages/faq/HowMuchDoesAIAutomationCostPage';
import { HowLongDoesItTakeToImplementPage } from './pages/faq/HowLongDoesItTakeToImplementPage';
import { DoINeedTechnicalSkillsPage } from './pages/faq/DoINeedTechnicalSkillsPage';
// How-To Pages
import { HowToChooseRightAIAutomationPage } from './pages/how-to/HowToChooseRightAIAutomationPage';
import { HowToMeasureAIAutomationROIPage } from './pages/how-to/HowToMeasureAIAutomationROIPage';
import { HowToGetStartedWithAIAutomationPage } from './pages/how-to/HowToGetStartedWithAIAutomationPage';
import { HowToTrainAIAgentPage } from './pages/how-to/HowToTrainAIAgentPage';
import { HowToIntegrateAIAutomationPage } from './pages/how-to/HowToIntegrateAIAutomationPage';
// Best Practices Pages
import { AIAutomationSuccessFactorsPage } from './pages/best-practices/AIAutomationSuccessFactorsPage';
import { WhenToUseAIAutomationPage } from './pages/best-practices/WhenToUseAIAutomationPage';
import { HowToMaintainAIAutomationPage } from './pages/best-practices/HowToMaintainAIAutomationPage';
import { AIAutomationMistakesToAvoidPage } from './pages/best-practices/AIAutomationMistakesToAvoidPage';
import { AIAutomationROIBestPracticesPage } from './pages/best-practices/AIAutomationROIBestPracticesPage';
// Getting Started Pages
import { AIAutomationBasicsPage } from './pages/getting-started/AIAutomationBasicsPage';
import { ImplementingAIAutomationPage } from './pages/getting-started/ImplementingAIAutomationPage';
import { FirstAIAutomationProjectPage } from './pages/getting-started/FirstAIAutomationProjectPage';
import { AIAutomationForSmallBusinessPage } from './pages/getting-started/AIAutomationForSmallBusinessPage';
// About manuv.co Pages
import { WhatIsManuvPage } from './pages/about-manuv/WhatIsManuvPage';
import { ManuvServicesPage } from './pages/about-manuv/ManuvServicesPage';
import { HowManuvWorksPage } from './pages/about-manuv/HowManuvWorksPage';
import { WorkingWithManuvPage } from './pages/about-manuv/WorkingWithManuvPage';
import { ManuvPricingPage } from './pages/about-manuv/ManuvPricingPage';
import { ManuvSuccessStoriesPage } from './pages/about-manuv/ManuvSuccessStoriesPage';
// manuv.co Solutions Pages
import { ManuvCustomerSupportSolutionPage } from './pages/solutions-manuv/ManuvCustomerSupportSolutionPage';
import { ManuvSalesAutomationSolutionPage } from './pages/solutions-manuv/ManuvSalesAutomationSolutionPage';
import { ManuvDataProcessingSolutionPage } from './pages/solutions-manuv/ManuvDataProcessingSolutionPage';
// manuv.co Case Studies Pages
import { ManuvCaseStudyEcommercePage } from './pages/case-studies-manuv/ManuvCaseStudyEcommercePage';
import { ManuvCaseStudySaaSPage } from './pages/case-studies-manuv/ManuvCaseStudySaaSPage';
// manuv.co Industries Pages
import { ManuvForSaaSCompaniesPage } from './pages/industries-manuv/ManuvForSaaSCompaniesPage';
import { ManuvForEcommercePage } from './pages/industries-manuv/ManuvForEcommercePage';
// manuv.co Use Cases Pages
import { ManuvForCustomerRetentionPage } from './pages/use-cases-manuv/ManuvForCustomerRetentionPage';
import { ManuvForLeadGenerationPage } from './pages/use-cases-manuv/ManuvForLeadGenerationPage';
// manuv.co Comparisons Pages
import { ManuvVsTraditionalAutomationPage } from './pages/comparisons-manuv/ManuvVsTraditionalAutomationPage';
// manuv.co Guides Pages
import { GettingStartedWithManuvPage } from './pages/guides-manuv/GettingStartedWithManuvPage';
// manuv.co FAQ Pages
import { WhyChooseManuvPage } from './pages/faq-manuv/WhyChooseManuvPage';
import { WhatMakesManuvDifferentPage } from './pages/faq-manuv/WhatMakesManuvDifferentPage';
import { HowMuchDoesManuvCostPage } from './pages/faq-manuv/HowMuchDoesManuvCostPage';
import { HowLongDoesManuvTakePage } from './pages/faq-manuv/HowLongDoesManuvTakePage';

function AppContent() {
  const isWebView = useWebView();
  const { isChatOpen, initialMessage, handleSendMessage, handleOpenChat, handleCloseChat } = useChat();

  // Set favicon globally for all pages
  useEffect(() => {
    const setFavicon = () => {
      let faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (!faviconLink) {
        faviconLink = document.createElement('link');
        faviconLink.rel = 'icon';
        document.head.appendChild(faviconLink);
      }
      faviconLink.type = 'image/png';
      faviconLink.href = '/logos/manuv logo.png';

      // Also set apple-touch-icon
      let appleIconLink = document.querySelector('link[rel="apple-touch-icon"]') as HTMLLinkElement;
      if (!appleIconLink) {
        appleIconLink = document.createElement('link');
        appleIconLink.rel = 'apple-touch-icon';
        document.head.appendChild(appleIconLink);
      }
      appleIconLink.href = '/logos/manuv logo.png';
    };

    setFavicon();
  }, []);

  // Always show webview features (floating chat bar)
  const showWebViewFeatures = true;

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
            <Route path="/assessment" element={<AssessmentPage />} />
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
            {/* FAQ Routes */}
            <Route path="/faq/what-is-ai-automation" element={<WhatIsAIAutomationPage />} />
            <Route path="/faq/how-does-ai-automation-work" element={<HowDoesAIAutomationWorkPage />} />
            <Route path="/faq/what-are-ai-agents" element={<WhatAreAIAgentsPage />} />
            <Route path="/faq/how-much-does-ai-automation-cost" element={<HowMuchDoesAIAutomationCostPage />} />
            <Route path="/faq/how-long-does-it-take-to-implement" element={<HowLongDoesItTakeToImplementPage />} />
            <Route path="/faq/do-i-need-technical-skills" element={<DoINeedTechnicalSkillsPage />} />
            {/* How-To Routes */}
            <Route path="/how-to/choose-right-ai-automation" element={<HowToChooseRightAIAutomationPage />} />
            <Route path="/how-to/measure-ai-automation-roi" element={<HowToMeasureAIAutomationROIPage />} />
            <Route path="/how-to/get-started-with-ai-automation" element={<HowToGetStartedWithAIAutomationPage />} />
            <Route path="/how-to/train-ai-agent" element={<HowToTrainAIAgentPage />} />
            <Route path="/how-to/integrate-ai-automation" element={<HowToIntegrateAIAutomationPage />} />
            {/* Best Practices Routes */}
            <Route path="/best-practices/ai-automation-success-factors" element={<AIAutomationSuccessFactorsPage />} />
            <Route path="/best-practices/when-to-use-ai-automation" element={<WhenToUseAIAutomationPage />} />
            <Route path="/best-practices/how-to-maintain-ai-automation" element={<HowToMaintainAIAutomationPage />} />
            <Route path="/best-practices/ai-automation-mistakes-to-avoid" element={<AIAutomationMistakesToAvoidPage />} />
            <Route path="/best-practices/ai-automation-roi-best-practices" element={<AIAutomationROIBestPracticesPage />} />
            {/* Getting Started Routes */}
            <Route path="/getting-started/ai-automation-basics" element={<AIAutomationBasicsPage />} />
            <Route path="/getting-started/implementing-ai-automation" element={<ImplementingAIAutomationPage />} />
            <Route path="/getting-started/first-ai-automation-project" element={<FirstAIAutomationProjectPage />} />
            <Route path="/getting-started/ai-automation-for-small-business" element={<AIAutomationForSmallBusinessPage />} />
            {/* About manuv.co Routes */}
            <Route path="/about-manuv/what-is-manuv" element={<WhatIsManuvPage />} />
            <Route path="/about-manuv/manuv-services" element={<ManuvServicesPage />} />
            <Route path="/about-manuv/how-manuv-works" element={<HowManuvWorksPage />} />
            <Route path="/about-manuv/working-with-manuv" element={<WorkingWithManuvPage />} />
            <Route path="/about-manuv/manuv-pricing" element={<ManuvPricingPage />} />
            <Route path="/about-manuv/manuv-success-stories" element={<ManuvSuccessStoriesPage />} />
            {/* manuv.co Solutions Routes */}
            <Route path="/solutions-manuv/manuv-customer-support-solution" element={<ManuvCustomerSupportSolutionPage />} />
            <Route path="/solutions-manuv/manuv-sales-automation-solution" element={<ManuvSalesAutomationSolutionPage />} />
            <Route path="/solutions-manuv/manuv-data-processing-solution" element={<ManuvDataProcessingSolutionPage />} />
            {/* manuv.co Case Studies Routes */}
            <Route path="/case-studies-manuv/manuv-case-study-ecommerce" element={<ManuvCaseStudyEcommercePage />} />
            <Route path="/case-studies-manuv/manuv-case-study-saas" element={<ManuvCaseStudySaaSPage />} />
            {/* manuv.co Industries Routes */}
            <Route path="/industries-manuv/manuv-for-saas-companies" element={<ManuvForSaaSCompaniesPage />} />
            <Route path="/industries-manuv/manuv-for-ecommerce" element={<ManuvForEcommercePage />} />
            {/* manuv.co Use Cases Routes */}
            <Route path="/use-cases-manuv/manuv-for-customer-retention" element={<ManuvForCustomerRetentionPage />} />
            <Route path="/use-cases-manuv/manuv-for-lead-generation" element={<ManuvForLeadGenerationPage />} />
            {/* manuv.co Comparisons Routes */}
            <Route path="/comparisons-manuv/manuv-vs-traditional-automation" element={<ManuvVsTraditionalAutomationPage />} />
            {/* manuv.co Guides Routes */}
            <Route path="/guides-manuv/getting-started-with-manuv" element={<GettingStartedWithManuvPage />} />
            {/* manuv.co FAQ Routes */}
            <Route path="/faq-manuv/why-choose-manuv" element={<WhyChooseManuvPage />} />
            <Route path="/faq-manuv/what-makes-manuv-different" element={<WhatMakesManuvDifferentPage />} />
            <Route path="/faq-manuv/how-much-does-manuv-cost" element={<HowMuchDoesManuvCostPage />} />
            <Route path="/faq-manuv/how-long-does-manuv-take" element={<HowLongDoesManuvTakePage />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
        
        {/* Floating Chat Bar - Shows when scrolled past hero */}
        <FloatingChatBar />
        
        {/* Chat Interface - Always show */}
        <ChatInterface
          isOpen={isChatOpen}
          onClose={handleCloseChat}
          initialMessage={initialMessage}
        />
      </div>
    </Router>
  );
}

function App() {
  return (
    <ChatProvider>
      <AppContent />
    </ChatProvider>
  );
}

export default App
