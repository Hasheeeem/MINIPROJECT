import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Star, Trash2, Archive } from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  isStarred: boolean;
  isArchived: boolean;
}

const UserInquiries = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([
    {
      id: '1',
      name: 'John Smith',
      email: 'john@example.com',
      subject: 'Wedding Event Inquiry',
      message: 'Hi, I would like to inquire about your wedding event services. We are planning a wedding for 200 guests...',
      date: '2024-03-15',
      isStarred: false,
      isArchived: false,
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      subject: 'Corporate Event Planning',
      message: 'We are looking to organize a corporate event for our company. Could you provide details about your corporate packages?',
      date: '2024-03-14',
      isStarred: true,
      isArchived: false,
    },
  ]);

  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [filter, setFilter] = useState<'all' | 'starred' | 'archived'>('all');

  const toggleStar = (id: string) => {
    setInquiries(inquiries.map(inq =>
      inq.id === id ? { ...inq, isStarred: !inq.isStarred } : inq
    ));
  };

  const toggleArchive = (id: string) => {
    setInquiries(inquiries.map(inq =>
      inq.id === id ? { ...inq, isArchived: !inq.isArchived } : inq
    ));
  };

  const deleteInquiry = (id: string) => {
    setInquiries(inquiries.filter(inq => inq.id !== id));
    if (selectedInquiry?.id === id) {
      setSelectedInquiry(null);
    }
  };

  const filteredInquiries = inquiries.filter(inq => {
    if (filter === 'starred') return inq.isStarred;
    if (filter === 'archived') return inq.isArchived;
    return !inq.isArchived;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-3xl font-bold">User Inquiries</h2>
          <p className="text-neutral-400 mt-2">Manage and respond to user inquiries</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'all'
                ? 'bg-blue-500 text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('starred')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'starred'
                ? 'bg-blue-500 text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Starred
          </button>
          <button
            onClick={() => setFilter('archived')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'archived'
                ? 'bg-blue-500 text-white'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Archived
          </button>
        </div>

        <div className="grid md:grid-cols-[350px,1fr] gap-6">
          {/* Inquiry List */}
          <div className="bg-neutral-900 rounded-xl p-4 h-[calc(100vh-240px)] overflow-y-auto">
            <div className="space-y-2">
              {filteredInquiries.map((inquiry) => (
                <motion.div
                  key={inquiry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedInquiry?.id === inquiry.id
                      ? 'bg-blue-500/10 border border-blue-500/50'
                      : 'hover:bg-neutral-800 border border-transparent'
                  }`}
                  onClick={() => setSelectedInquiry(inquiry)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-neutral-400" />
                      </div>
                      <div>
                        <h3 className="font-medium">{inquiry.name}</h3>
                        <p className="text-sm text-neutral-400">{inquiry.subject}</p>
                        <p className="text-xs text-neutral-500 mt-1">
                          {new Date(inquiry.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStar(inquiry.id);
                      }}
                      className={`p-1 rounded-lg transition-colors ${
                        inquiry.isStarred
                          ? 'text-yellow-500 hover:bg-yellow-500/10'
                          : 'text-neutral-400 hover:bg-neutral-700'
                      }`}
                    >
                      <Star className="h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Inquiry Details */}
          {selectedInquiry ? (
            <div className="bg-neutral-900 rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold">{selectedInquiry.subject}</h3>
                  <p className="text-neutral-400">From: {selectedInquiry.name} ({selectedInquiry.email})</p>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleArchive(selectedInquiry.id)}
                    className="p-2 text-neutral-400 hover:bg-neutral-800 rounded-lg transition-colors"
                  >
                    <Archive className="h-5 w-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => deleteInquiry(selectedInquiry.id)}
                    className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>

              <div className="bg-neutral-800 rounded-lg p-4 mb-6">
                <p className="text-neutral-300 whitespace-pre-wrap">{selectedInquiry.message}</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Reply to this inquiry</h4>
                <textarea
                  rows={6}
                  className="block w-full px-3 py-2 border border-neutral-700 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Type your response..."
                />
                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Send Reply
                  </motion.button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-neutral-900 rounded-xl p-6 flex items-center justify-center">
              <div className="text-center text-neutral-400">
                <Mail className="h-12 w-12 mx-auto mb-4" />
                <p>Select an inquiry to view details</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default UserInquiries;