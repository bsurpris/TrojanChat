import { useState } from 'react'
import {
    Hash,
    Bell,
    Pin,
    Users,
    Search,
    Inbox,
    HelpCircle,
    Smile,
    Gift,
    Sticker,
    Image,
    Plus,
    Mic,
    Headphones,
    Settings,
    Volume2,
    Video,
    Phone
} from 'lucide-react'

export default function DiscordClone() {
    const [selectedChannel, setSelectedChannel] = useState('general')
    const [selectedServer, setSelectedServer] = useState('My Server')

    const servers = [
        { id: 1, name: 'My Server', icon: '🎮', color: 'bg-indigo-500' },
        { id: 2, name: 'Gaming', icon: '🎯', color: 'bg-purple-500' },
        { id: 3, name: 'Music', icon: '🎵', color: 'bg-pink-500' },
        { id: 4, name: 'Art', icon: '🎨', color: 'bg-orange-500' },
    ]

    const channels = {
        text: [
            { id: 1, name: 'general', unread: false },
            { id: 2, name: 'random', unread: true },
            { id: 3, name: 'memes', unread: false },
            { id: 4, name: 'announcements', unread: false },
        ],
        voice: [
            { id: 5, name: 'General Voice', users: 3 },
            { id: 6, name: 'Gaming', users: 0 },
            { id: 7, name: 'Music', users: 1 },
        ]
    }

    const messages = [
        {
            id: 1,
            user: 'CoolGamer',
            avatar: '🎮',
            time: '10:30 AM',
            content: 'Hey everyone! Ready for the raid tonight?',
            color: 'bg-blue-500'
        },
        {
            id: 2,
            user: 'MusicLover',
            avatar: '🎵',
            time: '10:32 AM',
            content: 'Absolutely! What time are we starting?',
            color: 'bg-purple-500'
        },
        {
            id: 3,
            user: 'ArtistPro',
            avatar: '🎨',
            time: '10:35 AM',
            content: 'I might be a bit late, but I\'ll join as soon as I can!',
            color: 'bg-pink-500'
        },
        {
            id: 4,
            user: 'TechWizard',
            avatar: '⚡',
            time: '10:40 AM',
            content: 'Don\'t forget to check the strategy guide I posted yesterday',
            color: 'bg-yellow-500'
        },
    ]

    const onlineMembers = [
        { id: 1, name: 'CoolGamer', status: 'online', avatar: '🎮', activity: 'Playing Valorant' },
        { id: 2, name: 'MusicLover', status: 'online', avatar: '🎵', activity: 'Listening to Spotify' },
        { id: 3, name: 'ArtistPro', status: 'idle', avatar: '🎨', activity: 'Custom Status' },
        { id: 4, name: 'TechWizard', status: 'dnd', avatar: '⚡', activity: 'Do Not Disturb' },
    ]

    return (
        <div className="flex h-screen bg-gray-800 text-gray-100 font-sans">
            {/* Server List */}
            <div className="w-[72px] bg-gray-900 flex flex-col items-center py-3 space-y-2">
                {/* Home Button */}
                <button className="w-12 h-12 bg-indigo-500 rounded-[24px] hover:rounded-[16px] transition-all duration-200 flex items-center justify-center text-white font-bold text-xl mb-2 hover:bg-indigo-400">
                    D
                </button>

                <div className="w-8 h-[2px] bg-gray-700 rounded-full" />

                {/* Server Icons */}
                {servers.map((server) => (
                    <button
                        key={server.id}
                        onClick={() => setSelectedServer(server.name)}
                        className={`w-12 h-12 ${server.color} rounded-[24px] hover:rounded-[16px] transition-all duration-200 flex items-center justify-center text-2xl group relative hover:translate-y-[-2px]`}
                    >
                        {server.icon}
                        <div className="absolute left-16 bg-gray-950 text-white px-3 py-2 rounded-md text-sm font-semibold opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                            {server.name}
                        </div>
                    </button>
                ))}

                {/* Add Server Button */}
                <button className="w-12 h-12 bg-gray-800 rounded-[24px] hover:rounded-[16px] hover:bg-green-600 transition-all duration-200 flex items-center justify-center text-green-500 hover:text-white text-3xl">
                    +
                </button>
            </div>

            {/* Channels Sidebar */}
            <div className="w-60 bg-gray-800 flex flex-col">
                {/* Server Name */}
                <div className="h-12 px-4 flex items-center shadow-md border-b border-gray-900 hover:bg-gray-750 cursor-pointer">
                    <h2 className="font-bold text-white flex-1">{selectedServer}</h2>
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>

                {/* Channels List */}
                <div className="flex-1 overflow-y-auto pt-4 px-2">
                    {/* Text Channels */}
                    <div className="mb-4">
                        <div className="flex items-center px-2 mb-1">
                            <svg className="w-3 h-3 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Text Channels</h3>
                        </div>
                        {channels.text.map((channel) => (
                            <button
                                key={channel.id}
                                onClick={() => setSelectedChannel(channel.name)}
                                className={`w-full flex items-center px-2 py-1.5 rounded group mb-0.5 ${selectedChannel === channel.name
                                        ? 'bg-gray-700 text-white'
                                        : 'text-gray-400 hover:bg-gray-750 hover:text-gray-300'
                                    }`}
                            >
                                <Hash className="w-5 h-5 mr-1.5 text-gray-400" />
                                <span className="flex-1 text-left font-medium">{channel.name}</span>
                                {channel.unread && (
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Voice Channels */}
                    <div>
                        <div className="flex items-center px-2 mb-1">
                            <svg className="w-3 h-3 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Voice Channels</h3>
                        </div>
                        {channels.voice.map((channel) => (
                            <button
                                key={channel.id}
                                className="w-full flex items-center px-2 py-1.5 rounded text-gray-400 hover:bg-gray-750 hover:text-gray-300 group mb-0.5"
                            >
                                <Volume2 className="w-5 h-5 mr-1.5 text-gray-400" />
                                <span className="flex-1 text-left font-medium">{channel.name}</span>
                                {channel.users > 0 && (
                                    <span className="text-xs text-gray-500">{channel.users}</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* User Panel */}
                <div className="h-[52px] bg-gray-900 px-2 flex items-center">
                    <div className="flex items-center flex-1 min-w-0">
                        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-bold mr-2 flex-shrink-0">
                            👤
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-white truncate">YourUsername</div>
                            <div className="text-xs text-gray-400 truncate">#1234</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="text-gray-400 hover:text-gray-200 transition-colors">
                            <Mic className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-200 transition-colors">
                            <Headphones className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-200 transition-colors">
                            <Settings className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col bg-gray-700">
                {/* Channel Header */}
                <div className="h-12 px-4 flex items-center shadow-md border-b border-gray-900">
                    <Hash className="w-6 h-6 text-gray-400 mr-2" />
                    <h3 className="font-bold text-white">{selectedChannel}</h3>
                    <div className="flex-1" />
                    <div className="flex items-center space-x-4 text-gray-400">
                        <button className="hover:text-gray-200 transition-colors">
                            <Phone className="w-5 h-5" />
                        </button>
                        <button className="hover:text-gray-200 transition-colors">
                            <Video className="w-5 h-5" />
                        </button>
                        <button className="hover:text-gray-200 transition-colors">
                            <Pin className="w-5 h-5" />
                        </button>
                        <button className="hover:text-gray-200 transition-colors">
                            <Users className="w-5 h-5" />
                        </button>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-gray-900 text-sm px-2 py-1 rounded w-36 focus:w-60 transition-all duration-200 focus:outline-none"
                            />
                            <Search className="w-4 h-4 absolute right-2 top-1.5 text-gray-500" />
                        </div>
                        <button className="hover:text-gray-200 transition-colors">
                            <Inbox className="w-5 h-5" />
                        </button>
                        <button className="hover:text-gray-200 transition-colors">
                            <HelpCircle className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                    {/* Welcome Message */}
                    <div className="flex flex-col items-start mb-4">
                        <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-3xl mb-2">
                            #
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-1">Welcome to #{selectedChannel}!</h2>
                        <p className="text-gray-400">This is the start of the #{selectedChannel} channel.</p>
                    </div>

                    {/* Chat Messages */}
                    {messages.map((message) => (
                        <div key={message.id} className="flex hover:bg-gray-750 px-4 py-1 -mx-4 group">
                            <div className={`w-10 h-10 rounded-full ${message.color} flex items-center justify-center text-xl mr-4 flex-shrink-0`}>
                                {message.avatar}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-baseline">
                                    <span className="font-semibold text-white mr-2">{message.user}</span>
                                    <span className="text-xs text-gray-500">{message.time}</span>
                                </div>
                                <p className="text-gray-100 mt-1">{message.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="px-4 pb-6">
                    <div className="bg-gray-600 rounded-lg px-4 py-3">
                        <div className="flex items-center">
                            <button className="text-gray-400 hover:text-gray-200 mr-3">
                                <Plus className="w-6 h-6" />
                            </button>
                            <input
                                type="text"
                                placeholder={`Message #${selectedChannel}`}
                                className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                            />
                            <div className="flex items-center space-x-3 ml-3 text-gray-400">
                                <button className="hover:text-gray-200">
                                    <Gift className="w-5 h-5" />
                                </button>
                                <button className="hover:text-gray-200">
                                    <Sticker className="w-5 h-5" />
                                </button>
                                <button className="hover:text-gray-200">
                                    <Smile className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Members Sidebar */}
            <div className="w-60 bg-gray-800 overflow-y-auto">
                <div className="p-4">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                        Online — {onlineMembers.filter(m => m.status === 'online').length}
                    </h3>
                    {onlineMembers.map((member) => (
                        <div
                            key={member.id}
                            className="flex items-center px-2 py-2 rounded hover:bg-gray-750 cursor-pointer group mb-1"
                        >
                            <div className="relative mr-3">
                                <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-sm">
                                    {member.avatar}
                                </div>
                                <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-800 ${member.status === 'online' ? 'bg-green-500' :
                                        member.status === 'idle' ? 'bg-yellow-500' :
                                            member.status === 'dnd' ? 'bg-red-500' : 'bg-gray-500'
                                    }`} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-300 truncate">{member.name}</div>
                                {member.activity && (
                                    <div className="text-xs text-gray-500 truncate">{member.activity}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
