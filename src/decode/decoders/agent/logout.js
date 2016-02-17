
export default function logout() {
  return {
    event: 'agent.logout',
    status: 'success',
    message: 'Agent logged out'
  };
}