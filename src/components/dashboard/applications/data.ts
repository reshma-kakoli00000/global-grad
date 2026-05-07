export const applicationStages = [
  {
    title: 'Saved',
    count: 4,
    color: 'bg-gray-400',
    applications: [
      {
        title: 'M.S. in Computer Science',
        university: 'Stanford University',
        intake: 'FALL 2024',
        status: 'Deadline: Dec 15, 2024',
        type: 'deadline',
      },
      {
        title: 'Data Science Intensive',
        university: 'UC Berkeley',
        intake: 'SPRING 2025',
        status: 'Deadline: Feb 01, 2025',
        type: 'deadline',
      },
    ],
  },

  {
    title: 'Preparing',
    count: 3,
    color: 'bg-blue-600',
    applications: [
      {
        title: 'MBA Program',
        university: 'Harvard Business School',
        intake: 'FALL 2024',
        progress: 65,
        documents: 'Documents: 4/6',
        type: 'progress',
      },
    ],
  },

  {
    title: 'Applied',
    count: 2,
    color: 'bg-green-600',
    applications: [
      {
        title: 'M.Eng Robotics',
        university: 'Carnegie Mellon',
        intake: 'SUBMITTED',
        status: 'Applied on Nov 12, 2024',
        type: 'success',
      },
    ],
  },

  {
    title: 'Interview',
    count: 1,
    color: 'bg-yellow-500',
    applications: [
      {
        title: 'AI Research Fellowship',
        university: 'MIT',
        intake: 'INTERVIEW',
        status: 'Interview on Jan 18',
        type: 'warning',
      },
    ],
  },
];