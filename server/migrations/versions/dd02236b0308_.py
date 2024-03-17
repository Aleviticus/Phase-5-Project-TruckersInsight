"""empty message

Revision ID: dd02236b0308
Revises: 0c3a9f73dda5
Create Date: 2024-03-16 22:01:31.293755

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dd02236b0308'
down_revision = '0c3a9f73dda5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('loads_table', schema=None) as batch_op:
        batch_op.drop_column('username')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('loads_table', schema=None) as batch_op:
        batch_op.add_column(sa.Column('username', sa.VARCHAR(), nullable=False))

    # ### end Alembic commands ###