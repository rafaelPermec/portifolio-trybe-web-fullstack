from src.elevator import Elevator, ElevatorStatus


def test_create_elevator():
    elevator = Elevator()
    assert elevator.current_floor == 0
    assert elevator.door_is_open is False
    assert elevator._status == ElevatorStatus.STOPPED


def test_move_up():
    elevator = Elevator()
    destination_floor = 5
    elevator.move_up(destination_floor)

    assert elevator.door_is_open is False
    assert elevator._status == ElevatorStatus.GOING_UP
    assert elevator.current_floor == destination_floor
