from enum import Enum


class Elevator():

    def __init__(self):
        self.current_floor = 0
        self.door_is_open = False
        self._status = ElevatorStatus.STOPPED

    def move_up(self, destination_floor):
        self.door_is_open = False
        self._status = ElevatorStatus.GOING_UP
        self.current_floor = destination_floor


class ElevatorStatus(Enum):
    STOPPED = 0
    GOING_UP = 1
    GOING_DOWN = 2
    LOCKED = 3
