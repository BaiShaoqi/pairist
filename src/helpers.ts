export const cn = (...classNames: any[]) => {
  return classNames.filter(Boolean).join(' ');
};

export function validateTeamSettings(teamName: string, teamURL: string) {
  if (!teamName.trim().length) {
    return 'Team name cannot be empty.';
  }

  if (!teamURL.trim().length) {
    return 'Team URL cannot be empty.';
  }

  if (!/^[a-z0-9_-]+$/i.test(teamURL)) {
    return 'Team URL can only contain characters A-Z, 0-9, -, and _.';
  }
}
