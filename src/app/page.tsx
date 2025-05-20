"use client";
import React, { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, Info, Download, ExternalLink, Maximize2, Grid, List, BarChart2 } from 'lucide-react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

// Base data for methods, targets, and outcomes
const BASE_METHODS = [
  "Convolutional Neural Networks", "Long Short-Term Memory Networks", "Federated Learning",
  "Graph Neural Networks", "Transformer Models", "Reinforcement Learning", 
  "Fuzzy Control Systems", "Genetic Algorithms", "Random Forests", "Support Vector Machines",
  "Transfer Learning", "Quantized Neural Networks", "Knowledge Distillation", "Decision Trees",
  "Bayesian Networks", "Ensemble Methods", "Recurrent Neural Networks", "K-Means Clustering",
  "Deep Belief Networks", "Attention Mechanisms"
];

const BASE_TARGETS = [
  "Low-power IoT devices", "Autonomous navigation", "Healthcare monitoring", "Smart grids",
  "Network security", "Wearable electronics", "Robotics", "Industrial IoT", 
  "Environmental monitoring", "Wireless sensor networks", "Edge computing", "Smart cities",
  "Agricultural monitoring", "Structural health monitoring", "Supply chain management",
  "Autonomous vehicles", "Smart homes", "Energy management", "Predictive maintenance",
  "Disaster response systems"
];

const BASE_OUTCOMES = [
  "Energy reduction", "Accuracy improvement", "Latency reduction", "Security enhancement",
  "Bandwidth optimization", "Memory footprint reduction", "Fault tolerance",
  "Scalability improvement", "Cost reduction", "Battery life extension",
  "Privacy preservation", "Processing speed increase", "Reliability improvement",
  "Power consumption reduction", "Heat generation reduction", "Inference time optimization",
  "Robustness to noise", "Model size reduction", "Communication efficiency", "Throughput increase"
];

// Generate paper data based on search terms - this is key to our search functionality
const generatePapers = (searchQuery: string) => {
  // Parse search query for keywords
  const query = searchQuery.toLowerCase();
  
  // Determine which methods, targets and outcomes to prioritize based on search
  const relevantMethods = BASE_METHODS.filter(m => 
    query.includes(m.toLowerCase()) || Math.random() > 0.5);
  const relevantTargets = BASE_TARGETS.filter(t => 
    query.includes(t.toLowerCase()) || Math.random() > 0.5);
  const relevantOutcomes = BASE_OUTCOMES.filter(o => 
    query.includes(o.toLowerCase()) || Math.random() > 0.5);
  
  // Generate papers with weighted relevance based on search terms
  const papers = [];
  for (let i = 0; i < 25; i++) {
    const method = relevantMethods[Math.floor(Math.random() * relevantMethods.length)];
    const target = relevantTargets[Math.floor(Math.random() * relevantTargets.length)];
    const outcome = relevantOutcomes[Math.floor(Math.random() * relevantOutcomes.length)];
    
    // Calculate relevance score based on search terms
    let relevance = 0.5 + (Math.random() * 0.5); // Base relevance
    if (query.includes(method.toLowerCase())) relevance += 0.2;
    if (query.includes(target.toLowerCase())) relevance += 0.2;
    if (query.includes(outcome.toLowerCase())) relevance += 0.2;
    relevance = Math.min(relevance, 0.99); // Cap at 0.99
    
    // Keywords to find in search
    const keywords = [
      "energy", "efficient", "power", "low-power", "optimization", "ai", "ml", "deep learning",
      "sensor", "iot", "edge", "embedded", "network", "wireless", "autonomous", "neural"
    ];
    
    // Boost relevance for papers that match keywords in the search
    keywords.forEach(keyword => {
      if (query.includes(keyword) && 
          (method.toLowerCase().includes(keyword) || 
           target.toLowerCase().includes(keyword) || 
           outcome.toLowerCase().includes(keyword))) {
        relevance += 0.1;
      }
    });
    
    // Generate realistic performance values
    let value = "";
    if (outcome.includes("reduction") || outcome.includes("optimization")) {
      value = `${Math.floor(Math.random() * 60) + 20}%`; // 20-80%
    } else if (outcome.includes("improvement") || outcome.includes("increase")) {
      value = `${Math.floor(Math.random() * 40) + 10}%`; // 10-50%
    } else if (outcome.includes("extension")) {
      value = `${Math.floor(Math.random() * 3) + 1}.${Math.floor(Math.random() * 9)}x`; // 1.0-3.9x
    } else {
      value = `${Math.floor(Math.random() * 70) + 30}%`; // 30-100%
    }
    
    // Generate paper details
    papers.push({
      id: i + 1,
      title: generateTitle(method, target, outcome),
      authors: generateAuthors(),
      year: Math.random() > 0.5 ? 2024 : 2023,
      journal: generateJournal(target),
      method: method,
      target: target,
      outcome: outcome,
      value: value,
      citations: Math.floor(Math.random() * 30),
      relevance: Math.min(relevance, 0.99)
    });
  }
  
  return papers.sort((a, b) => b.relevance - a.relevance);
};

// Helper functions to generate realistic paper details
const generateTitle = (method: string, target: string, outcome: string) => {
  const templates = [
    `${method} for ${outcome} in ${target}`,
    `An Efficient ${method} Approach to ${outcome} for ${target}`,
    `Optimizing ${target} Using ${method}: Impact on ${outcome}`,
    `${outcome} in ${target} Through Advanced ${method}`,
    `A Novel ${method} Framework for ${target} With Enhanced ${outcome}`,
    `Improving ${outcome} in ${target}: A ${method} Perspective`
  ];
  return templates[Math.floor(Math.random() * templates.length)];
};

const generateAuthors = () => {
  const firstNames = ["J.", "A.", "S.", "M.", "R.", "L.", "K.", "P.", "T.", "D.", "H.", "Y.", "C.", "E.", "G."];
  const lastNames = ["Smith", "Kumar", "Zhang", "Johnson", "Rodriguez", "Chen", "Kim", "Patel", "Wang", "Singh", 
                    "Lee", "Garcia", "Wilson", "Anderson", "Thompson", "Li", "Müller", "Martinez", "Brown", "Sharma"];
  
  const numAuthors = Math.floor(Math.random() * 2) + 2; // 2-3 authors
  const authors = [];
  
  for (let i = 0; i < numAuthors; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    authors.push(`${firstName} ${lastName}`);
  }
  
  return authors.join(", ");
};

const generateJournal = (target: string | string[]) => {
  const journals = [
    "IEEE Internet of Things Journal",
    "IEEE Transactions on Neural Networks and Learning Systems",
    "IEEE Transactions on Biomedical Engineering",
    "IEEE Sensors Journal",
    "IEEE Transactions on Industrial Informatics",
    "IEEE Transactions on Smart Grid",
    "IEEE Transactions on Autonomous Systems",
    "IEEE Transactions on Mobile Computing",
    "IEEE Journal on Selected Areas in Communications",
    "IEEE Transactions on Pattern Analysis and Machine Intelligence"
  ];
  
  // Try to match journal to target area
  if (target.includes("healthcare")) return "IEEE Transactions on Biomedical Engineering";
  if (target.includes("grid")) return "IEEE Transactions on Smart Grid";
  if (target.includes("sensors") || target.includes("wireless")) return "IEEE Sensors Journal";
  if (target.includes("industrial")) return "IEEE Transactions on Industrial Informatics";
  if (target.includes("IoT") || target.includes("Internet")) return "IEEE Internet of Things Journal";
  if (target.includes("autonomous")) return "IEEE Transactions on Autonomous Systems";
  
  return journals[Math.floor(Math.random() * journals.length)];
};

// Generate heatmap data based on search
const generateHeatmapData = (searchQuery: string, methods: string[] | any[], targets: string[] | any[]) => {
  const query = searchQuery.toLowerCase();
  const heatmapData: { method: any; target: any; strength: number; papers: number; }[] = [];
  
  // Use only relevant methods and targets
  const relevantMethods = methods.slice(0, 6);
  const relevantTargets = targets.slice(0, 6);
  
  relevantMethods.forEach((method: string) => {
    relevantTargets.forEach((target: string) => {
      // Base strength
      let strength = 10 + Math.floor(Math.random() * 65);
      let papers = Math.floor(Math.random() * 30) + 1;
      
      // Boost values if they match the search query
      if (query.includes(method.toLowerCase())) {
        strength += 20;
        papers += 10;
      }
      if (query.includes(target.toLowerCase())) {
        strength += 15;
        papers += 8;
      }
      
      // Apply keyword-based boosts
      if (query.includes("energy") && 
          (method.includes("CNN") || method.includes("Neural") || target.includes("low-power"))) {
        strength += 15;
      }
      
      // Cap values
      strength = Math.min(strength, 98);
      papers = Math.min(papers, 50);
      
      heatmapData.push({
        method,
        target,
        strength: strength,
        papers: papers
      });
    });
  });
  
  return heatmapData;
};

// Generate method effectiveness data
const calculateMethodEffectiveness = (searchQuery: string, methods: string[], outcomes: string[]) => {
  const query = searchQuery.toLowerCase();
  const effectiveness: Record<string, Record<string, number>> = {};
  
  methods.forEach(method => {
    effectiveness[method] = {};
    outcomes.forEach(outcome => {
      // Base effectiveness
      let value = Math.floor(Math.random() * 50) + 30;
      
      // Boost by search relevance
      if (query.includes(method.toLowerCase())) value += 15;
      if (query.includes(outcome.toLowerCase())) value += 10;
      
      // Special case boosts based on known good combinations
      if (method.includes("CNN") && outcome.includes("energy")) value += 15;
      if (method.includes("Federated") && outcome.includes("privacy")) value += 20;
      if (method.includes("Graph") && outcome.includes("optimization")) value += 15;
      
      // Cap at 98
      effectiveness[method][outcome] = Math.min(value, 98);
    });
  });
  
  return effectiveness;
};

const EvidenceMappingScreen = () => {
  const [searchQuery, setSearchQuery] = useState("AI methods for low-power sensor networks");
  const [activeTab, setActiveTab] = useState("evidenceMap");
  const [yearFilter, setYearFilter] = useState("all");
  const [citationFilter, setCitationFilter] = useState("all");
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [selectedTarget, setSelectedTarget] = useState<string | null>(null);
  const [selectedOutcome, setSelectedOutcome] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // State for dynamic data
  const [papers, setPapers] = useState<any[]>([]);
  const [methods, setMethods] = useState<string[]>([]);
  const [targets, setTargets] = useState<string[]>([]);
  const [outcomes, setOutcomes] = useState<string[]>([]);
  const [heatmapData, setHeatmapData] = useState<any[]>([]);
  const [effectivenessData, setEffectivenessData] = useState<Record<string, Record<string, number>>>({});
  const [resultsCount, setResultsCount] = useState(0);
  
  // Update data based on search query
  useEffect(() => {
    refreshData(searchQuery);
  }, []);
  
  const refreshData = (query: string) => {
    // Filter methods, targets, and outcomes based on the search query
    const filterByQuery = (items: any[], query: string) => {
      query = query.toLowerCase();
      // Prioritize items that match the query
      return [
        ...items.filter(item => query.includes(item.toLowerCase())),
        ...items.filter(item => !query.includes(item.toLowerCase()))
      ].slice(0, 15); // Limit to 15 items
    };
    
    const newMethods = filterByQuery(BASE_METHODS, query);
    const newTargets = filterByQuery(BASE_TARGETS, query);
    const newOutcomes = filterByQuery(BASE_OUTCOMES, query);
    
    // Generate papers based on search
    const newPapers = generatePapers(query);
    
    // Update state
    setMethods(newMethods);
    setTargets(newTargets);
    setOutcomes(newOutcomes);
    setPapers(newPapers);
    setHeatmapData(generateHeatmapData(query, newMethods, newTargets));
    setEffectivenessData(calculateMethodEffectiveness(query, newMethods, newOutcomes));
    setResultsCount(10 + Math.floor(Math.random() * 90));
  };
  
  // Simulate loading when search is performed
  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      refreshData(searchQuery);
      setIsLoading(false);
    }, 1500);
  };
  
  // Filter papers based on selected filters
  const filteredPapers = papers.filter(paper => {
    if (selectedMethod && paper.method !== selectedMethod) return false;
    if (selectedTarget && paper.target !== selectedTarget) return false;
    if (selectedOutcome && paper.outcome !== selectedOutcome) return false;
    if (yearFilter !== "all" && paper.year.toString() !== yearFilter) return false;
    if (citationFilter === "highImpact" && paper.citations < 10) return false;
    return true;
  });
  
  // Generate synthesis content
  const getSynthesisContent = () => {
    // Extract top methods, targets and outcomes from search results
    const topMethods = [...new Set(papers.slice(0, 10).map(p => p.method))].slice(0, 3);
    const topTargets = [...new Set(papers.slice(0, 10).map(p => p.target))].slice(0, 3);
    const topOutcomes = [...new Set(papers.slice(0, 10).map(p => p.outcome))].slice(0, 3);
    
    return {
      summary: `Based on comprehensive analysis of IEEE literature, <strong>${topMethods[0]}</strong> and <strong>${topMethods[1]}</strong> emerge as the most effective AI methods for ${topTargets[0]}, with ${topOutcomes[0]} of ${papers[0].value} compared to baseline approaches. ${topMethods[2]} show promising results specifically for ${topTargets[1]}, while ${topMethods[1]} remain computationally intensive for most ${topTargets[2]} applications despite their effectiveness in ${topOutcomes[1]}.`,
      findings: [
        {
          title: `1. ${topOutcomes[0]} Improvements`,
          content: `${topMethods[0]} optimized for edge deployment consistently demonstrate ${papers[0].value} ${topOutcomes[0]} across various ${topTargets[0]} (confidence: high, ${5 + Math.floor(Math.random() * 15)} studies). Memory-efficient variants specifically designed for ${topTargets[1]} show up to ${papers[1].value} ${topOutcomes[0]} with minimal accuracy trade-offs.`
        },
        {
          title: `2. ${topOutcomes[1]} Techniques`,
          content: `${topMethods[1]} approaches allow model training without raw data transmission, reducing bandwidth requirements by ${papers[2].value} while maintaining comparable accuracy to centralized approaches (confidence: medium-high, ${3 + Math.floor(Math.random() * 8)} studies). This is particularly valuable for sensitive applications like ${topTargets[2]}.`
        },
        {
          title: `3. ${topOutcomes[2]} Optimization`,
          content: `${topMethods[2]} demonstrate superior performance for network-wide resource allocation, improving overall ${topOutcomes[2]} by ${papers[3].value} compared to traditional heuristic approaches (confidence: medium, ${2 + Math.floor(Math.random() * 6)} studies). Their ability to model node relationships makes them particularly suited for heterogeneous sensor deployments.`
        }
      ],
      gaps: [
        `Limited research on combining ${topMethods[1]} with model compression techniques specifically for ultra-low-power devices`,
        `Few studies examining long-term reliability and drift compensation in deployed AI models on ${topTargets[0]}`,
        `Insufficient exploration of ${topMethods[2]} for dynamic power management in varying environmental conditions`,
        `Need for standardized benchmarks to compare ${topOutcomes[0]}-accuracy tradeoffs across different AI approaches`
      ]
    };
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* IEEE Xplore Header */}
      <header className="bg-blue-900 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">IEEE Xplore Digital Library</div>
            <div className="flex space-x-4">
              <span>Browse</span>
              <span>My Settings</span>
              <span>Help</span>
              <span>Profile</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Secondary Navigation */}
      <div className="bg-blue-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex space-x-6 text-sm">
            <span>Home</span>
            <span>Journals & Magazines</span>
            <span>Conferences</span>
            <span>Standards</span>
            <span>Courses</span>
            <span className="font-semibold">Evidence Mapping</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-blue-900 mb-6">Comprehensive Evidence Mapping</h1>
          
          {/* Search Bar */}
            <div className="flex mb-8">
            <div className="relative flex-grow">
              <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                handleSearch();
                }
              }}
              className="w-full py-3 px-4 pr-12 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter research topic, methods, or outcomes..."
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Info size={18} className="text-gray-400 cursor-pointer" />
              </div>
            </div>
            <button 
              className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-r-md flex items-center transition-colors"
              onClick={handleSearch}
            >
              <Search size={18} className="mr-2" />
              <span>Search</span>
            </button>
            <button 
              className="ml-4 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-md flex items-center transition-colors"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} className="mr-2" />
              <span>Filters</span>
              <ChevronDown size={16} className="ml-2" />
            </button>
          </div>
          
          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-gray-50 p-4 mb-8 rounded-md grid grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Methods</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={selectedMethod || ''}
                  onChange={(e) => setSelectedMethod(e.target.value || null)}
                >
                  <option value="">All Methods</option>
                  {methods.map((method, index) => (
                    <option key={index} value={method}>{method}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Target Systems</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={selectedTarget || ''}
                  onChange={(e) => setSelectedTarget(e.target.value || null)}
                >
                  <option value="">All Targets</option>
                  {targets.map((target, index) => (
                    <option key={index} value={target}>{target}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Outcomes</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={selectedOutcome || ''}
                  onChange={(e) => setSelectedOutcome(e.target.value || null)}
                >
                  <option value="">All Outcomes</option>
                  {outcomes.map((outcome, index) => (
                    <option key={index} value={outcome}>{outcome}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Publication Year</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                >
                  <option value="all">All Years</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Citation Impact</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={citationFilter}
                  onChange={(e) => setCitationFilter(e.target.value)}
                >
                  <option value="all">All Papers</option>
                  <option value="highImpact">High Impact (10+ Citations)</option>
                </select>
              </div>
            </div>
          )}
          
          {/* Loading State */}
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="relative">
              <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mb-4"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></div>
              </div>
              </div>
              <h3 className="text-blue-800 font-medium text-lg mt-4">Analyzing Research Data</h3>
              <p className="text-gray-600 text-sm mt-2 text-center max-w-md">
              Mapping evidence across {Math.floor(Math.random() * 100) + 150} journals and {Math.floor(Math.random() * 500) + 5000} publications
              </p>
              <div className="mt-4 w-64 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{ width: `${Math.floor(Math.random() * 30) + 40}%` }}></div>
              </div>
              <p className="text-gray-500 text-xs mt-3">This may take a few moments</p>
            </div>
          ) : (
            <>
              {/* Results Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <div className="flex space-x-8">
                  <button 
                    className={`py-3 px-1 -mb-px font-medium text-sm transition-colors ${activeTab === 'evidenceMap' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('evidenceMap')}
                  >
                    Evidence Map
                  </button>
                  <button 
                    className={`py-3 px-1 -mb-px font-medium text-sm transition-colors ${activeTab === 'results' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('results')}
                  >
                    Results ({filteredPapers.length})
                  </button>
                  <button 
                    className={`py-3 px-1 -mb-px font-medium text-sm transition-colors ${activeTab === 'synthesis' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('synthesis')}
                  >
                    Synthesis Report
                  </button>
                  <button 
                    className={`py-3 px-1 -mb-px font-medium text-sm transition-colors ${activeTab === 'trends' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setActiveTab('trends')}
                  >
                    Trends & Gaps
                  </button>
                </div>
              </div>
              
              {/* Tab Content */}
              {activeTab === 'evidenceMap' && (
                <div>
                  <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Method-Target Evidence Matrix</h2>
                    <div className="flex space-x-2">
                      <button className="text-sm text-blue-700 flex items-center">
                        <Download size={16} className="mr-1" />
                        Export
                      </button>
                      <button className="text-sm text-blue-700 flex items-center">
                        <Maximize2 size={16} className="mr-1" />
                        Expand
                      </button>
                    </div>
                  </div>
                  
                  {/* Evidence Heatmap */}
                    <div className="overflow-auto">
                    <div className="min-w-max">
                      <div className="grid grid-cols-7">
                      <div className="col-span-1 p-2 font-semibold text-gray-700 border-b-2 border-gray-200">
                        Methods ↓ / Targets →
                      </div>
                      {targets.slice(0, 6).map((target, index) => (
                        <div key={index} className="p-2 font-semibold text-gray-700 border-b-2 border-gray-200 text-sm truncate" title={target}>
                        {target}
                        </div>
                      ))}
                      </div>
                      
                      {methods.slice(0, 6).map((method, rowIndex) => (
                      <div key={rowIndex} className="grid grid-cols-7">
                        <div className="col-span-1 p-3 font-medium text-gray-800 bg-gray-50 text-sm border-b border-gray-200 flex items-center truncate" title={method}>
                        {method}
                        </div>
                        {targets.slice(0, 6).map((target, colIndex) => {
                        // Find matching data for this method-target pair
                        const cellData = heatmapData.find(d => 
                          d.method === method && d.target === target
                        );
                        const intensity = cellData ? cellData.strength : 0;
                        const papers = cellData ? cellData.papers : 0;
                        
                        // Search relevance - highlight cells matching the search query
                        const matchesSearch = searchQuery.toLowerCase().includes(method.toLowerCase()) || 
                                  searchQuery.toLowerCase().includes(target.toLowerCase());
                        
                        // Improved color palette with blue-to-purple gradient
                        let bgColor = "bg-gray-100";
                        let textColor = "text-gray-500";
                        
                        if (intensity > 80) {
                          bgColor = matchesSearch ? "bg-indigo-700" : "bg-indigo-600";
                          textColor = "text-white";
                        } else if (intensity > 60) {
                          bgColor = matchesSearch ? "bg-blue-600" : "bg-blue-500";
                          textColor = "text-white";
                        } else if (intensity > 40) {
                          bgColor = matchesSearch ? "bg-blue-500" : "bg-blue-400";
                          textColor = "text-white";
                        } else if (intensity > 20) {
                          bgColor = matchesSearch ? "bg-blue-400" : "bg-blue-300";
                          textColor = "text-gray-800";
                        } else if (intensity > 0) {
                          bgColor = matchesSearch ? "bg-blue-200" : "bg-blue-100";
                          textColor = "text-gray-800";
                        }
                        
                        return (
                          <div 
                          key={colIndex} 
                          className={`relative p-3 border border-gray-100 ${bgColor} ${matchesSearch ? "ring-2 ring-blue-300" : ""} hover:opacity-90 cursor-pointer flex flex-col items-center justify-center transition-all duration-200 hover:shadow-md`}
                          title={`${method} for ${target}: ${intensity}% effectiveness rating based on ${papers} papers`}
                          onClick={() => {
                            setSelectedMethod(method);
                            setSelectedTarget(target);
                            setActiveTab('results');
                          }}
                          >
                          <span className={`font-bold ${textColor} text-base`}>{intensity}%</span>
                          <span className={`text-xs mt-1 ${textColor} opacity-80`}>{papers} papers</span>
                          {intensity > 70 && (
                            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-amber-400" title="High confidence research area"></span>
                          )}
                          </div>
                        );
                        })}
                      </div>
                      ))}
                    </div>
                    </div>
                  
                  <div className="mt-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Method Effectiveness by Outcome</h2>
                    
                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(effectivenessData).slice(0, 3).map(([method, outcomes], index) => (
                        // <div key={index} className="
                        <div key={index} className="bg-white rounded-lg shadow p-4">
                          <h3 className="font-semibold text-gray-800 mb-3">{method}</h3>
                          <div className="space-y-2">
                            {Object.entries(outcomes).slice(0, 4).map(([outcome, value], idx) => (
                              <div key={idx} className="flex items-center">
                                <span className="text-sm text-gray-700 w-40 truncate" title={outcome}>{outcome}</span>
                                <div className="flex-grow h-4 bg-gray-100 rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-blue-600" 
                                    style={{ width: `${value}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium text-gray-700 ml-2">{value}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'results' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">Research Results</h2>
                      <p className="text-gray-600 text-sm">{resultsCount} results found for "{searchQuery}"</p>
                    </div>
                    <div className="flex space-x-3">
                      <button className="bg-gray-100 p-2 rounded text-gray-600 hover:bg-gray-200">
                        <Grid size={18} />
                      </button>
                      <button className="bg-blue-100 p-2 rounded text-blue-700">
                        <List size={18} />
                      </button>
                      <button className="bg-gray-100 p-2 rounded text-gray-600 hover:bg-gray-200">
                        <BarChart2 size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {filteredPapers.map((paper, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-semibold text-blue-900 mb-2">{paper.title}</h3>
                          <div className="text-sm text-gray-600">{paper.citations} citations</div>
                        </div>
                        <div className="text-sm text-gray-700 mb-3">{paper.authors} • {paper.year} • {paper.journal}</div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                            {paper.method}
                          </span>
                          <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                            {paper.target}
                          </span>
                          <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                            {paper.outcome}: {paper.value}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-1 items-center">
                            <div className="text-xs font-medium text-gray-500">Relevance:</div>
                            <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-green-500" 
                                style={{ width: `${paper.relevance * 100}%` }}
                              ></div>
                            </div>
                            <div className="text-xs font-medium text-gray-600">{Math.floor(paper.relevance * 100)}%</div>
                          </div>
                          <div className="flex space-x-3">
                            <button className="text-blue-700 text-sm flex items-center">
                              <Download size={14} className="mr-1" />
                              PDF
                            </button>
                            <button className="text-blue-700 text-sm flex items-center">
                              <ExternalLink size={14} className="mr-1" />
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'synthesis' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Synthesis Report</h2>
                    <button className="flex items-center text-blue-700 hover:text-blue-800 text-sm font-medium">
                      <Download size={16} className="mr-2" />
                      Export as PDF
                    </button>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Executive Summary</h3>
                    <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: getSynthesisContent().summary }}></p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Key Findings</h3>
                    <div className="space-y-5">
                      {getSynthesisContent().findings.map((finding, index) => (
                        <div key={index}>
                          <h4 className="font-semibold text-gray-800 mb-2">{finding.title}</h4>
                          <p className="text-gray-700">{finding.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Research Gaps & Opportunities</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      {getSynthesisContent().gaps.map((gap, index) => (
                        <li key={index}>{gap}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              {activeTab === 'trends' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Research Trends & Gap Analysis</h2>
                    <div className="flex space-x-3 text-sm">
                      <select className="border border-gray-300 rounded p-1">
                        <option>Last 5 Years</option>
                        <option>Last 3 Years</option>
                        <option>All Time</option>
                      </select>
                      <button className="flex items-center text-blue-700 hover:text-blue-800 font-medium">
                        <Download size={16} className="mr-1" />
                        Export
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {/* Research Volume Trend */}
                    <div className="bg-white border border-gray-200 rounded-lg p-5">
                      <h3 className="font-semibold text-gray-800 mb-4">Publication Volume by Method (2019-2024)</h3>
                      <div className="h-60 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={[
                              { year: 2019, CNN: 25, LSTM: 22, Federated: 8, GNN: 12, Transformer: 18, RL: 15 },
                              { year: 2020, CNN: 28, LSTM: 24, Federated: 15, GNN: 18, Transformer: 24, RL: 18 },
                              { year: 2021, CNN: 32, LSTM: 27, Federated: 22, GNN: 28, Transformer: 35, RL: 22 },
                              { year: 2022, CNN: 35, LSTM: 30, Federated: 32, GNN: 35, Transformer: 48, RL: 28 },
                              { year: 2023, CNN: 38, LSTM: 32, Federated: 42, GNN: 45, Transformer: 65, RL: 35 },
                              { year: 2024, CNN: 40, LSTM: 33, Federated: 55, GNN: 52, Transformer: 78, RL: 42 },
                            ]}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="CNN" stroke="#3B82F6" strokeWidth={2} />
                            <Line type="monotone" dataKey="LSTM" stroke="#10B981" strokeWidth={2} />
                            <Line type="monotone" dataKey="Federated" stroke="#8B5CF6" strokeWidth={2} />
                            <Line type="monotone" dataKey="GNN" stroke="#F59E0B" strokeWidth={2} />
                            <Line type="monotone" dataKey="Transformer" stroke="#EF4444" strokeWidth={2} />
                            <Line type="monotone" dataKey="RL" stroke="#6366F1" strokeWidth={2} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    {/* Citation Impact */}
                    <div className="bg-white border border-gray-200 rounded-lg p-5">
                      <h3 className="font-semibold text-gray-800 mb-4">Citation Impact by Target System</h3>
                      <div className="h-60 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                        data={[
                          { target: 'Low-power IoT', citations: 245, h_index: 12 },
                          { target: 'Healthcare', citations: 198, h_index: 9 },
                          { target: 'Smart grids', citations: 176, h_index: 8 },
                          { target: 'Autonomous nav', citations: 310, h_index: 14 },
                          { target: 'Wearables', citations: 167, h_index: 7 },
                          { target: 'Industrial IoT', citations: 220, h_index: 11 }
                        ]}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="target" />
                        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                        <Tooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="citations" name="Total Citations" stroke="#8884d8" strokeWidth={2} />
                        <Line yAxisId="right" type="monotone" dataKey="h_index" name="H-index" stroke="#82ca9d" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Emerging Research Directions</h3>
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="w-1/4 font-medium text-gray-800">Multi-modal AI approaches</div>
                        <div className="w-2/4">
                          <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500" style={{ width: '78%' }}></div>
                          </div>
                        </div>
                        <div className="w-1/4 pl-4 text-sm text-gray-600">+78% YoY growth</div>
                      </div>
                      <div className="flex">
                        <div className="w-1/4 font-medium text-gray-800">Neuromorphic computing</div>
                        <div className="w-2/4">
                          <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                        <div className="w-1/4 pl-4 text-sm text-gray-600">+65% YoY growth</div>
                      </div>
                      <div className="flex">
                        <div className="w-1/4 font-medium text-gray-800">Hybrid energy harvesting</div>
                        <div className="w-2/4">
                          <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500" style={{ width: '47%' }}></div>
                          </div>
                        </div>
                        <div className="w-1/4 pl-4 text-sm text-gray-600">+47% YoY growth</div>
                      </div>
                      <div className="flex">
                        <div className="w-1/4 font-medium text-gray-800">Distributed intelligence</div>
                        <div className="w-2/4">
                          <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500" style={{ width: '41%' }}></div>
                          </div>
                        </div>
                        <div className="w-1/4 pl-4 text-sm text-gray-600">+41% YoY growth</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Research Gap Analysis</h3>
                    
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">Research Gap</th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">Potential Impact</th>
                          <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 border-b">Current Activity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3 px-4 border-b text-sm">Combined AI and security optimization techniques</td>
                          <td className="py-3 px-4 border-b text-sm"><span className="text-red-600 font-medium">High</span></td>
                          <td className="py-3 px-4 border-b text-sm"><span className="text-amber-600 font-medium">Moderate</span></td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b text-sm">Resilience to environmental interference in edge AI</td>
                          <td className="py-3 px-4 border-b text-sm"><span className="text-red-600 font-medium">High</span></td>
                          <td className="py-3 px-4 border-b text-sm"><span className="text-red-600 font-medium">Low</span></td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b text-sm">Standardized benchmarking for energy-efficient AI</td>
                          <td className="py-3 px-4 border-b text-sm"><span className="text-amber-600 font-medium">Moderate</span></td>
                          <td className="py-3 px-4 border-b text-sm"><span className="text-amber-600 font-medium">Moderate</span></td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-sm">Hardware-aware AI training techniques</td>
                          <td className="py-3 px-4 text-sm"><span className="text-red-600 font-medium">High</span></td>
                          <td className="py-3 px-4 text-sm"><span className="text-green-600 font-medium">Growing</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2024 IEEE – All rights reserved. Use of this web site signifies your agreement to the terms and conditions.</p>
        </div>
      </footer>
    </div>
  );
};

export default EvidenceMappingScreen;