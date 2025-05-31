
def delete_room(card):
    """Удаление комнаты после завершения игры"""
    card.delete()
    print(f"Room {card.id} deleted after game over.")
