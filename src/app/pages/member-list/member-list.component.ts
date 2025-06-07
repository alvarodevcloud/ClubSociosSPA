import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersService } from '../../api/services/members.service';
import { MemberDto } from '../../api/models/member-dto';

@Component({
  standalone: true,
  selector: 'app-member-list',
  imports: [CommonModule],
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  private memberService = inject(MembersService);

  members: MemberDto[] = [];

  ngOnInit(): void {
    this.memberService.apiMembersGet$Json().subscribe({
      next: (data: MemberDto[]) => {
        this.members = data;
        console.log(this.members);
      },
      error: (err: any) => {
        console.error('Error fetching members', err);
      }
    });
  }
}
