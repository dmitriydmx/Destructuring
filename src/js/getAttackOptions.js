export function getAttackOptions({ special }) {
  return special.map(specialAttack => ({
    id: specialAttack.id,
    name: specialAttack.name,
    description: specialAttack.description || 'Описание недоступно',
    icon: specialAttack.icon,
  }));
}

