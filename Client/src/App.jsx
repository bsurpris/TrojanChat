import { useState, useEffect, useRef } from 'react';
import { Send, Hash, Users, Settings, Plus, Smile, Pin, Search, Bell, Inbox, HelpCircle, AtSign, Menu, X } from 'lucide-react';

const App = () => {
  const [currentServer, setCurrentServer] = useState('general');
  const [currentChannel, setCurrentChannel] = useState('general');
  const [message, setMessage] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const messagesEndRef = useRef(null);

  const [servers] = useState([
    { id: 'general', name: 'General', icon: '🏠' },
    { id: 'gaming', name: 'Gaming', icon: '🎮' },
    { id: 'music', name: 'Music', icon: '🎵' }
  ]);

  const [channels] = useState({
    general: [
      { id: 'general', name: 'general', type: 'text' },
      { id: 'random', name: 'random', type: 'text' },
      { id: 'announcements', name: 'announcements', type: 'text' }
    ],
    gaming: [
      { id: 'game-chat', name: 'game-chat', type: 'text' },
      { id: 'lfg', name: 'looking-for-group', type: 'text' }
    ],
    music: [
      { id: 'music-share', name: 'music-share', type: 'text' },
      { id: 'concerts', name: 'concerts', type: 'text' }
    ]
  });

  const [messages, setMessages] = useState({
    general: [
      { id: 1, user: 'Alex', avatar: '👤', content: 'Hey everyone! Welcome to the server!', time: '12:30 PM' },
      { id: 2, user: 'Sarah', avatar: '👩', content: 'Thanks! Excited to be here', time: '12:32 PM' },
      { id: 3, user: 'Mike', avatar: '👨', content: 'What are we building today?', time: '12:35 PM' }
    ],
    random: [
      { id: 1, user: 'Jordan', avatar: '🧑', content: 'Random thoughts go here!', time: '1:00 PM' }
    ],
    announcements: [
      { id: 1, user: 'Admin', avatar: '👑', content: 'Server rules: Be respectful and have fun!', time: '10:00 AM' }
    ],
    'game-chat': [
      { id: 1, user: 'Gamer1', avatar: '🎮', content: 'Anyone up for a match?', time: '2:00 PM' }
    ],
    'lfg': [
      { id: 1, user: 'Player', avatar: '⚔️', content: 'LF2M raid tonight', time: '3:00 PM' }
    ],
    'music-share': [
      { id: 1, user: 'DJ', avatar: '🎧', content: 'Check out this new track!', time: '4:00 PM' }
    ],
    concerts: [
      { id: 1, user: 'Fan', avatar: '🎤', content: 'Concert next week, who\'s going?', time: '5:00 PM' }
    ]
  });

  const [onlineUsers] = useState([
    { id: 1, name: 'Alex', status: 'online', avatar: '👤' },
    { id: 2, name: 'Sarah', status: 'online', avatar: '👩' },
    { id: 3, name: 'Mike', status: 'idle', avatar: '👨' },
    { id: 4, name: 'Jordan', status: 'dnd', avatar: '🧑' },
    { id: 5, name: 'Admin', status: 'online', avatar: '👑' }
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, currentChannel]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        user: 'You',
        avatar: '😊',
        content: message,
        time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
      };

      setMessages(prev => ({
        ...prev,
        [currentChannel]: [...(prev[currentChannel] || []), newMessage]
      }));
      setMessage('');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'idle': return 'bg-yellow-500';
      case 'dnd': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="flex h-screen bg-gray-700 text-gray-100 overflow-hidden">
      {/* Server List */}
      <div className="w-20 bg-gray-900 flex flex-col items-center py-3 space-y-2 flex-shrink-0">
        <button className="w-12 h-12 bg-indigo-600 rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center text-xl font-bold hover:bg-indigo-500">
          D
        </button>
        <div className="w-8 h-0.5 bg-gray-700"></div>
        {servers.map(server => (
          <button
            key={server.id}
            onClick={() => {
              setCurrentServer(server.id);
              setCurrentChannel(channels[server.id][0].id);
            }}
            className={`w-12 h-12 rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center text-2xl ${currentServer === server.id ? 'bg-indigo-600 rounded-xl' : 'bg-gray-800 hover:bg-indigo-600'
              }`}
          >
            {server.icon}
          </button>
        ))}
        <button className="w-12 h-12 bg-gray-800 rounded-2xl hover:rounded-xl hover:bg-green-600 transition-all duration-200 flex items-center justify-center">
          <Plus className="w-6 h-6" />
        </button>
      </div>

      {/* Channel Sidebar */}
      <div className={`${sidebarOpen ? 'w-60' : 'w-0'} bg-gray-800 flex flex-col transition-all duration-300 overflow-hidden flex-shrink-0`}>
        <div className="h-12 px-4 flex items-center justify-between border-b border-gray-900 shadow-md">
          <h2 className="font-semibold truncate">{servers.find(s => s.id === currentServer)?.name}</h2>
          <button className="text-gray-400 hover:text-gray-200">
            <Settings className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-2 py-2">
          <div className="mb-4">
            <div className="flex items-center justify-between px-2 mb-1">
              <span className="text-xs font-semibold text-gray-400 uppercase">Text Channels</span>
              <Plus className="w-4 h-4 text-gray-400 hover:text-gray-200 cursor-pointer" />
            </div>
            {channels[currentServer]?.map(channel => (
              <button
                key={channel.id}
                onClick={() => setCurrentChannel(channel.id)}
                className={`w-full flex items-center px-2 py-1.5 rounded hover:bg-gray-700 ${currentChannel === channel.id ? 'bg-gray-700 text-white' : 'text-gray-400'
                  }`}
              >
                <Hash className="w-5 h-5 mr-1.5" />
                <span className="text-sm truncate">{channel.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="h-14 bg-gray-900 px-2 flex items-center">
          <div className="flex items-center flex-1 min-w-0">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-lg">
                😊
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
            </div>
            <div className="ml-2 flex-1 min-w-0">
              <div className="text-sm font-semibold truncate">You</div>
              <div className="text-xs text-gray-400">#1234</div>
            </div>
          </div>
          <button className="p-1 hover:bg-gray-800 rounded">
            <Settings className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Channel Header */}
        <div className="h-12 bg-gray-800 px-4 flex items-center justify-between border-b border-gray-900 shadow-md">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mr-2 p-1 hover:bg-gray-700 rounded lg:hidden"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Hash className="w-6 h-6 text-gray-400 mr-2" />
            <span className="font-semibold">{currentChannel}</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4">
            <Hash className="w-10 h-10 p-2 bg-gray-600 rounded-full" />
            <div>
              <div className="text-white font-semibold">Welcome to #{currentChannel}!</div>
              <div className="text-xs">This is the start of the #{currentChannel} channel.</div>
            </div>
          </div>

          {(messages[currentChannel] || []).map(msg => (
            <div key={msg.id} className="flex hover:bg-gray-800 hover:bg-opacity-30 px-1 py-0.5 rounded group">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-xl mr-3 flex-shrink-0">
                {msg.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline space-x-2">
                  <span className="font-semibold">{msg.user}</span>
                  <span className="text-xs text-gray-400">{msg.time}</span>
                </div>
                <div className="text-gray-100 break-words">{msg.content}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="px-4 pb-6">
          <form onSubmit={handleSendMessage} className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={`Message #${currentChannel}`}
              className="w-full bg-gray-600 rounded-lg px-4 py-3 pr-12 text-gray-100 placeholder-gray-400 focus:outline-none"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <button type="button" className="text-gray-400 hover:text-gray-200">
                <Plus className="w-5 h-5" />
              </button>
              <button type="button" className="text-gray-400 hover:text-gray-200">
                <Smile className="w-5 h-5" />
              </button>
              <button type="submit" className="text-gray-400 hover:text-gray-200">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Members Sidebar */}
      <div className="hidden xl:block w-60 bg-gray-800 overflow-y-auto flex-shrink-0">
        <div className="p-4">
          <h3 className="text-xs font-semibold text-gray-400 uppercase mb-2">Online — {onlineUsers.filter(u => u.status === 'online').length}</h3>
          {onlineUsers.map(user => (
            <div key={user.id} className="flex items-center px-2 py-1.5 rounded hover:bg-gray-700 cursor-pointer">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-lg">
                  {user.avatar}
                </div>
                <div className={`absolute bottom-0 right-0 w-3 h-3 ${getStatusColor(user.status)} rounded-full border-2 border-gray-800`}></div>
              </div>
              <span className="ml-2 text-sm">{user.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
