import { motion } from 'framer-motion';
import { Workflow, Code, Zap, Database, Mail, Webhook } from 'lucide-react';
import { useState } from 'react';

const workflowNodes = [
    { id: 1, type: 'trigger', label: 'Schedule Trigger', icon: Workflow, color: 'from-green-500 to-emerald-500', x: 10, y: 50 },
    { id: 2, type: 'agent', label: 'AI Agent', icon: Zap, color: 'from-purple-500 to-pink-500', x: 30, y: 20 },
    { id: 3, type: 'model', label: 'OpenAI GPT-4', icon: Database, color: 'from-blue-500 to-cyan-500', x: 30, y: 50 },
    { id: 4, type: 'tool', label: 'Image Generator', icon: Webhook, color: 'from-orange-500 to-red-500', x: 50, y: 30 },
    { id: 5, type: 'tool', label: 'Perplexity Search', icon: Database, color: 'from-teal-500 to-cyan-500', x: 50, y: 50 },
    { id: 6, type: 'tool', label: 'Think Tool', icon: Zap, color: 'from-violet-500 to-purple-500', x: 50, y: 70 },
    { id: 7, type: 'output', label: 'Slack Post', icon: Mail, color: 'from-indigo-500 to-blue-500', x: 70, y: 50 },
];

const connections = [
    { from: 1, to: 2 },
    { from: 3, to: 2 },
    { from: 4, to: 2 },
    { from: 5, to: 2 },
    { from: 6, to: 2 },
    { from: 2, to: 7 },
];

const sampleWorkflowJSON = {
    "name": "Calgary Content Generator",
    "nodes": [
        {
            "id": "schedule_trigger",
            "type": "n8n-nodes-base.scheduleTrigger",
            "parameters": { "interval": "8 hours" }
        },
        {
            "id": "ai_agent",
            "type": "@n8n/n8n-nodes-langchain.agent",
            "parameters": {
                "promptType": "define",
                "text": "Social media strategist for Thinking Calgary..."
            }
        },
        {
            "id": "openai_model",
            "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
            "parameters": { "model": "gpt-4.1" }
        },
        {
            "id": "image_tool",
            "type": "n8n-nodes-base.httpRequestTool",
            "parameters": { "url": "webhook/createimage" }
        },
        {
            "id": "perplexity_tool",
            "type": "n8n-nodes-base.perplexityTool"
        },
        {
            "id": "slack_tool",
            "type": "n8n-nodes-base.slackTool",
            "parameters": { "channelId": "new-channel" }
        }
    ],
    "connections": {
        "schedule_trigger": { "main": [[{ "node": "ai_agent" }]] },
        "openai_model": { "ai_languageModel": [[{ "node": "ai_agent" }]] }
    }
};

export const Workflows = () => {
    const [showJSON, setShowJSON] = useState(false);

    return (
        <section id="workflows" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="flex items-center justify-center gap-2 text-accent mb-4">
                        <Workflow className="w-5 h-5" />
                        <span className="font-semibold tracking-wide uppercase text-sm">Automation Workflows</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Built on n8n</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We design and deploy custom n8n workflows that integrate seamlessly with your existing tools—from AI-powered content generation to automated customer communications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Visual Workflow */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 relative overflow-hidden"
                    >
                        <div className="grain absolute inset-0 opacity-20" />

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Workflow className="w-5 h-5 text-primary" />
                                Visual Workflow
                            </h3>

                            {/* Workflow Canvas */}
                            <div className="relative h-[400px] bg-black/50 rounded-xl border border-white/5 overflow-hidden">
                                {/* Connection Lines */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                    {connections.map((conn, i) => {
                                        const fromNode = workflowNodes.find(n => n.id === conn.from);
                                        const toNode = workflowNodes.find(n => n.id === conn.to);
                                        if (!fromNode || !toNode) return null;

                                        return (
                                            <motion.line
                                                key={i}
                                                x1={`${fromNode.x}%`}
                                                y1={`${fromNode.y}%`}
                                                x2={`${toNode.x}%`}
                                                y2={`${toNode.y}%`}
                                                stroke="rgba(59, 130, 246, 0.3)"
                                                strokeWidth="2"
                                                strokeDasharray="5,5"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 1, delay: i * 0.2 }}
                                            />
                                        );
                                    })}
                                </svg>

                                {/* Workflow Nodes */}
                                {workflowNodes.map((node, i) => (
                                    <motion.div
                                        key={node.id}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: i * 0.15, type: 'spring' }}
                                        className="absolute"
                                        style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
                                    >
                                        <div className={`bg-gradient-to-br ${node.color} p-3 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm`}>
                                            <node.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                            <span className="text-xs text-gray-400 bg-black/80 px-2 py-1 rounded">{node.label}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* JSON View */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 relative overflow-hidden"
                    >
                        <div className="grain absolute inset-0 opacity-20" />

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold flex items-center gap-2">
                                    <Code className="w-5 h-5 text-accent" />
                                    Workflow JSON
                                </h3>
                                <button
                                    onClick={() => setShowJSON(!showJSON)}
                                    className="text-sm px-3 py-1 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    {showJSON ? 'Hide' : 'Show'} Code
                                </button>
                            </div>

                            <div className="relative h-[400px] bg-black/50 rounded-xl border border-white/5 overflow-hidden">
                                {showJSON ? (
                                    <motion.pre
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="p-4 text-xs text-green-400 font-mono overflow-auto h-full"
                                    >
                                        {JSON.stringify(sampleWorkflowJSON, null, 2)}
                                    </motion.pre>
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <div className="text-center">
                                            <Code className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                                            <p className="text-gray-500">Click "Show Code" to view workflow JSON</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                                <p className="text-sm text-gray-300">
                                    <span className="font-semibold text-primary">Export-ready:</span> All workflows are version-controlled and can be deployed across environments instantly.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
